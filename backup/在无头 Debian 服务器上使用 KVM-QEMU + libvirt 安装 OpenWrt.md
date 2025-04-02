

# **1. 安装 KVM/QEMU 和 libvirt**
### **1.1. 确保 CPU 支持 KVM**
```sh
egrep -c '(vmx|svm)' /proc/cpuinfo
```
如果返回 **大于 0**，说明 CPU 支持 KVM。

### **1.2. 安装 KVM/QEMU 相关工具**
```sh
apt update
apt install -y qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils virtinst
```
启动 `libvirtd` 并设置开机自启：
```sh
systemctl enable --now libvirtd
```

### **1.3. 确保 KVM 已启用**
```sh
lsmod | grep kvm
```
如果输出包含 `kvm_intel` 或 `kvm_amd`，说明 KVM 已启用。

---

# **2. 配置桥接网络**
### **2.1. 创建 `br0` 桥接**
Debian 12 使用 `/etc/network/interfaces` 来管理网络，我们需要手动配置 `br0`。

编辑网络配置：
```sh
nano /etc/network/interfaces
```
添加以下内容（假设 `enp2s0` 是你的物理网卡）：
```ini
auto lo
iface lo inet loopback

auto enp2s0
iface enp2s0 inet manual

auto br0
iface br0 inet dhcp
    bridge_ports enp2s0
    bridge_stp off
    bridge_fd 0
    bridge_maxwait 0
```
**应用修改**
```sh
systemctl restart networking
```
**验证桥接是否生效**
```sh
ip a show br0
```
如果 `br0` 获取到了 IP，说明桥接成功。

---

# **3. 下载 OpenWrt 镜像**
### **3.1. 下载 OpenWrt 镜像**
进入 KVM 存储目录：
```sh
cd /var/lib/libvirt/images
```
下载最新 OpenWrt 镜像（x86-64 版本）：
```sh
wget https://downloads.openwrt.org/releases/23.05.0/targets/x86/64/openwrt-23.05.0-x86-64-generic-ext4-combined.img.gz
```
解压：
```sh
gunzip openwrt-23.05.0-x86-64-generic-ext4-combined.img.gz
```
创建openwrt虚拟磁盘（qcow2格式）：
```sh
qemu-img create -f qcow2 /var/lib/libvirt/images/openwrt.qcow2 1G
```
检查源镜像分区结构
```sh
virt-filesystems --long -a openwrt-*.img
```
执行分区调整和复制
```sh
sudo virt-resize \
  --expand /dev/sda2 \
  --no-extra-partition \
  openwrt-23.05.3-x86-64-generic-ext4-combined.img \
  /var/lib/libvirt/images/openwrt.qcow2
```
验证结果
```sh
virt-filesystems --long -a /var/lib/libvirt/images/openwrt.qcow2
qemu-img info /var/lib/libvirt/images/openwrt.qcow2
```

---

# **4. 创建 OpenWrt 虚拟机**
```sh
virt-install --name openwrt \
    --memory 512 --vcpus 1 \
    --disk path=/var/lib/libvirt/images/openwrt.qcow2,format=qcow2,bus=virtio \
    --network bridge=br0,model=virtio \
    --graphics none --console pty,target_type=serial \
    --os-type linux --os-variant generic --import
```

**参数说明：**
- `--memory 512 --vcpus 1` ：分配 512MB 内存和 1 核 CPU
- `--disk path=openwrt.qcow2` ：使用 OpenWrt 镜像
- `--network bridge=br0` ：使用桥接网络
- `--graphics none --console pty,target_type=serial` ：无图形界面，使用串口登录

---

# **5. 连接 OpenWrt 虚拟机**
等待 OpenWrt 启动完成后，使用 `virsh console` 连接：
```sh
virsh console openwrt
```
默认登录信息：
- **用户名**：`root`
- **密码**：默认无密码，直接回车登录

---

# **6. 配置 OpenWrt 网络**
### **6.1. 检查网卡**
```sh
ip a
```
如果 `eth0` 有 IP，则说明桥接成功。

### **6.2. 启用 DHCP（可选）**
如果 `eth0` 没有获取 IP，可以编辑 `/etc/config/network`：
```sh
vi /etc/config/network
```
修改 `lan` 接口：
```sh
config interface 'lan'
        option ifname 'eth0'
        option proto 'dhcp'
```
应用网络设置：
```sh
/etc/init.d/network restart
```

---

# **7. 使 OpenWrt 开机自启**
```sh
virsh autostart openwrt
```

---

# **8. 其他管理命令**
### **8.1. 启动/停止 OpenWrt**
```sh
virsh start openwrt
virsh shutdown openwrt
```
### **8.2. 查看 OpenWrt 的 VNC 端口**
```sh
virsh vncdisplay openwrt
```
如果需要使用 VNC，可用客户端连接：
```sh
vncviewer <服务器IP>:0
```
### **8.3. 删除 OpenWrt**
```sh
virsh destroy openwrt 或 virsh destroy openwrt   --remove-all-storage
virsh undefine openwrt
rm -f /var/lib/libvirt/images/openwrt.qcow2
```