1. 创建 LXC 容器

	- 登录到 PVE 宿主机 Shell
```
#推荐使用官方镜像(版本会更新，按路径寻找对应rootfs.tar.gz包即可)
wget https://archive.openwrt.org/releases/23.05.4/targets/x86/64/openwrt-23.05.4-x86-64-rootfs.tar.gz
#创建容器
pct create 102 openwrt-23.05.4-x86-64-rootfs.tar.gz --rootfs local:8 --ostype unmanaged --hostname openwrt --arch amd64 --cores 1 --memory 512 --swap 0 --features nesting=1 --net0 bridge=vmbr0,name=eth0
```
>上面创建容器命令参数说明如下:
pct create：创建一个容器
102：容器的 ID，这里指定为 102
-rootfs local:8：给容器分配 8G 的本地存储
-ostype unmanaged：标记该容器的类型为 unmanaged，即未托管
-hostname openwrt：容器的主机名为 openwrt
-arch amd64：容器架构为 amd64
-cores 1：分配 1 个 CPU 核心给容器
-memory 512：分配 512 MB 内存给容器
-swap 0：不分配 swap
-net0 bridge=vmbr0,name=eth0：分配 eth0 网卡，桥接 vmbr0 接口
--unprivileged 1：创建一个无特权(unprivileged)的LXC容器
	- 编辑openwrt LXC的配置文件
```
vi /etc/pve/lxc/102.conf
```
文件最后添加如下内容
```
lxc.cgroup2.devices.allow: c 108:0 rwm
lxc.mount.entry: /dev/ppp dev/ppp none bind,create=file
lxc.mount.entry: /dev/net/tun dev/net/tun none bind,create=file
```

2. 启动LXC进入终端后进行设置

	- 改密码
	passwd
	- 网络设置
	vi /etc/config/network
	- 替换国内openwrt源(北外)
	`sed -i 's_downloads.openwrt.org_mirrors.bfsu.edu.cn/openwrt_' /etc/opkg/distfeeds.conf`
	- 配置opkg,注释掉option check_signature
	`vi /etc/opkg.conf`
	- 添加第三方源 /etc/opkg/customfeeds.conf
	`src/gz dllkids https://op.dllkids.xyz/packages/x86_64/`
	- ddns url方式，地址填写 ``https://1.ipw.cn/``