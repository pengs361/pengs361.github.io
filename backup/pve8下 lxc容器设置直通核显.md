1. 安装核显驱动,PVE和LXC容器都要安装
```
apt install intel-media-va-driver-non-free vainfo -y
```
1. 获取PVE核显分组信息
`ls -l /dev/dri`
显示如下
```
root@pve:~# ls -l /dev/dri/
    total 0
    drwxr-xr-x 2 root root         80 Oct 13 12:39 by-path
    crw-rw---- 1 root video  226,   0 Oct 13 12:39 card0
    crw-rw---- 1 root render 226, 128 Oct 13 12:39 renderD128
```
这里的操作是挂载显卡的关键。先找到card0，可以看到设备号"226,0"，再找到renderD128，可以看到设备号为"226,128"。记下card0的设备号为226:0，renderD128的设备号为226:128。
1. 编辑容器配置
```
# 以LXC容器ID为110为例
vim /etc/pve/lxc/110.conf
""" 追加
# 1. 集显加速
lxc.apparmor.profile: unconfined
lxc.cgroup.devices.allow: a
lxc.cap.drop:
lxc.cgroup2.devices.allow: c 226:0 rwm
lxc.cgroup2.devices.allow: c 226:128 rwm
lxc.mount.entry: /dev/dri/card0 dev/dri/card0 none bind,optional,create=file
lxc.mount.entry: /dev/dri/renderD128 dev/dri/renderD128 none bind,optional,create=file
"""
```
至此, 基于LXC容器创建的直通/映射intel核显已经成功了, 此时可以启动容器了


