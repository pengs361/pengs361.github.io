>- **Linux Guest Installation Steps (Tested Kernel 6.2)**
We will need to run the same driver under Linux guests. We can repeat the steps for installing the driver. However, when modifying command line defaults, we use i915.enable_guc=3 instead of i915.enable_guc=3 i915.max_vfs=7. Furthermore, we don't need to use sysfsutils to create any more VFs since we ARE using a VF. Once that's done, update grub and initramfs, then reboot. Once the VM is back up again, do dmesg | grep i915 to see if your VF is recognized by the kernel. Optionally, install vainfo, then do vainfo to see if the iGPU has been picked up by the VAAPI.

>- **Windows Guest**
It is required to set the host CPU type in Proxmox to "host". I was able to get it working without further fiddling in the config files but your mileage may vary (i5-12500T with UHD 770). I've used Intel gfx version 4316 to get it working. Here's a link to download it. (https://www.intel.com/content/www/us/en/download/741626/780560/intel-arc-pro-graphics-windows.html)

>- **PVE Host Installation Steps (Tested Kernel 6.5 and 6.8)**

> 1. Clone this repo
> 1. Install build tools: apt install build-* dkms
> 1. Install the kernel and headers for desired version: apt install proxmox-headers-6.8.8-2-pve proxmox-kernel-6.8.8-2-pve (for unsigned kernel).
> 1. Change into the root of the cloned repository and run dkms add ..
> 1. Execute the command dkms install -m i915-sriov-dkms -v 2024.08.09 --force or dkms install -m i915-sriov-dkms -v $(cat VERSION) --force for a version-independent command.
> 1. Once finished, the kernel commandline needs to be adjusted: nano /etc/default/grub and change GRUB_CMDLINE_LINUX_DEFAULT to intel_iommu=on i915.enable_guc=3 i915.max_vfs=7, or add to it if you have other arguments there already.
>1. Optionally pin the kernel version and update the boot config via proxmox-boot-tool.
>1. In order to enable the VFs, a sysfs attribute must be set. Install sysfsutils, then do echo "devices/pci0000:00/0000:00:02.0/sriov_numvfs = 7" > /etc/sysfs.conf, assuming your iGPU is on 00:02 bus. If not, use lspci | grep VGA to find the PCIe bus your iGPU is on.
>1. Reboot the system.
>1. When the system is back up again, you should see the number of VFs under 02:00.1 - 02:00.7. Again, assuming your iGPU is on 00:02 bus.
>1. You can passthrough the VFs to LXCs or VMs. However, never touch the PF which is 02:00.0 under any circumstances.

>**Tested kernel versions:**
>- Proxmox VE Host: pve-kernel-6.1.0-1-pve ~ 6.2.9-1-pve, proxmox-kernel-6.5.13-3-pve ~ 6.8.12-1-pve
>- Debian 12 VM Guest: linux-image-6.5.0-0.deb12.4-amd64 ~ 6.7.12+bpo (6.1 requires custom kernel, see below)
>- Ubuntu 22.04 VM Guest: linux-image-6.2.0-39-generic ~ 6.5.0-44-generic
>- Gentoo VM Guest: gentoo-sources-6.1.19-gentoo ~ 6.2.11-gentoo

**1、安装 dkms git**
```
apt install build-* dkms git
```
**2、安装头文件**
```
apt update && apt install pve-headers-$(uname -r)
```
**3、下载 sriov驱动**
```
cd /usr/src
git clone https://github.com/strongtz/i915-sriov-dkms i915-sriov-dkms
```
**4、等下载进度完成后，进入项目文件夹修改配置文件：**
```
vi /usr/src/i915-sriov-dkms-6.5/dkms.conf
# 按需求改，比如下面
PACKAGE_NAME="i915-sriov-dkms"
PACKAGE_VERSION="6.5"
```
**5、将项目文件夹拷贝至/usr/src目录并以i915-sriov-dkms-$PACKAGE_VERSION重命名**
**6、安装模块**
```
dkms install --force -m i915-sriov-dkms -v 6.5
```
**7、执行完毕可以通过以下命令查看状态**
```
dkms status
```
**8、修改grub**
```
vi /etc/default/grub
# 注释掉现有GRUB_CMDLINE_LINUX_DEFAULT，然后粘贴下面的这行代码
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on iommu=pt i915.enable_guc=3 i915.max_vfs=7"
```
**9、更新 grub 并安装 sysfsutils**
```
update-grub && update-initramfs -u && apt install sysfsutils -y
```
**10、查看核显所在的总线**
```
lspci | grep VGA
```
**11、运行以下命令并根据需要修改 PCIe 总线编号，并指定生成VFS的数量3**
```
echo "devices/pci0000:00/0000:00:02.0/sriov_numvfs = 3" > /etc/sysfs.conf
```
**12、重启并通过``lspci |grep VGA``命令验证**
**13、如有报错``err -2``则执行命令``apt install linux-modules-extra-6.X.X-X-generic``**