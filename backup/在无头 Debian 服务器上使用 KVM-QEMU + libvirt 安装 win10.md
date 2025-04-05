# **1. 安装 KVM/QEMU 和 libvirt及配置桥接网络**
详见：[在无头 Debian 服务器上使用 KVM/QEMU + libvirt 安装 OpenWrt ](https://dpblog.cciz.cc/post/zai-wu-tou-%20Debian%20-fu-wu-qi-shang-shi-yong-%20KVM-QEMU%20%2B%20libvirt%20-an-zhuang-%20OpenWrt.html)
# **2. 创建win10虚拟机**
```sh
virt-install --name win10 --memory 4096 --vcpus 2 --cpu host-passthrough --machine q35 --disk path=/data/temp/kvm/win10/win10.qcow2,size=50,format=qcow2,bus=virtio --disk path=/data/temp/virtio-2016.iso,device=cdrom --cdrom /data/temp/win10_2016.iso --network bridge=br0,model=virtio --graphics vnc,listen=0.0.0.0,port=15900 --video qxl --os-variant win10 --features kvm_hidden=on --clock offset=localtime --noautoconsole
```
然后通过vnc在图形界面安装win10，安装完成禁用windows更新，关机后修改虚拟机配置文件`virsh edit win10`，移除安装光盘，修改显示spice获得更好的图形性能
# **3. 快照相关**
创建快照
```sh
virsh snapshot-create-as win10 --name init --description "初始化安装win10 2016 ltsb 已激活并禁用windows更新，search"
```
列出快照
```sh
virsh snapshot-list win10
```
查看快照信息
```sh
virsh snapshot-info win10 init
```
恢复到 init 快照
```sh
virsh snapshot-revert win10 init
```
删除快照
```sh
virsh snapshot-delete win10 init
```









