对比以后发现，KVM磁盘性能比virtualbox要好,virtualbox相比较KVM更容易实现所需功能，最后KVM输在winPE启动后无法发现硬盘，亦无法对win10进行功能裁减。
新建虚拟机（注意系统类型）
vboxmanage createvm --name win10 --ostype "Windows10_64" --register --basefolder /data/data0/vbox
设置CPU数量（必须打开IOAPIC）
vboxmanage modifyvm win10 --ioapic on
vboxmanage modifyvm win10 --cpus 2
设置CPU运行峰值
vboxmanage modifyvm win10 --cpuexecutioncap 80
使能largepages选项
vboxmanage modifyvm win10 --largepages on
为虚拟机添加sata控制器（用于硬盘）
vboxmanage storagectl win10 --name "sata controller" --add sata --controller IntelAHCI --bootable on --hostiocache on
为虚拟机添加ide控制器（用于光驱）
vboxmanage storagectl win10 --name "ide controller" --add ide
为虚拟机添加硬盘及光盘
vboxmanage storageattach win10 --storagectl "ide controller" --port 1 --device 0 --type dvddrive --medium "/data/data0/vbox/win10/win10_2016.iso"
vboxmanage storageattach win10 --storagectl "sata controller" --port 0 --device 0 --type hdd --medium "/data/data0/vbox/win10/win10.vdi"
修改虚拟机内存及显存
vboxmanage modifyvm win10 --memory 4096 --vram 128 --hwvirtex on
开启VRDP远程桌面
vboxmanage modifyvm win10 --vrde on
修改VRDP端口
vboxmanage modifyvm win10 --vrdeport 13389
添加及卸载附加光驱
vboxmanage storageattach win10 --storagectl "ide controller" --port 1 --device 0 --type dvddrive --medium "/data/data0/vbox/VBoxGuestAdditions.iso"
vboxmanage storageattach win10 --storagectl "ide controller" --port 1 --device 0 --type dvddrive --medium "none"
设置虚拟机启动顺序
vboxmanage modifyvm win10 --boot1 disk --boot2 dvd --boot3 none --boot4 none
保持状态关闭虚拟机
vboxmanage controlvm win10 savestate
断电关闭虚拟机
vboxmanage controlvm win10 poweroff
显示虚拟机详情
vboxmanage showvminfo win10
启动虚拟机
vboxmanage startvm win10 --type=headless
查询快照
vboxmanage snapshot win10 list
创建快照
vboxmanage snapshot win10 take snap20220331-installed
恢复快照
vboxmanage snapshot win10 restore snap20220331-installed
设置共享文件夹
vboxmanage sharedfolder add win10 --name=nas_data --hostpath=/data --transient(临时目录)
移动虚拟机默认目录
vboxmanage move win10 --folder /data/data0/vbox
创建100G虚拟磁盘
vboxmanage createmedium disk --filename win10.vdi --size 102400
查看运行中的虚拟机
vboxmanage list runningvms
查看所有虚拟机
vboxmanage list vms
完全删除虚拟机
VBoxManage unregistervm --delete 虚拟机名
修改网卡桥接模式
vboxmanage modifyvm win10 --nic1 bridged --nictype1 82545EM --bridgeadapter1 enp2s0
打开宿主机3D加速
vboxmanage modifyvm win10 --accelerate3d on
打开宿主机3D加速
vboxmanage modifyvm win10 --accelerate2dvideo on
查看虚拟机信息
vboxmanage showvminfo win10