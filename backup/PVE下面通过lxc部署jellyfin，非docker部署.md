**lxc模板选择alpine，容器创建的时候要选择特权容器，因为后面需要硬件解码**
- 容器里面安装核心显卡驱动
```
sudo apk add intel-media-driver
```
- 安装vainfo，测试显卡是否工作正常
```
apk add libva-utils

```
- 容器配置文件中添加下面内容
```
#/etc/pve/lxc/105.conf
lxc.cgroup2.devices.allow: c 226:0 rwm
lxc.cgroup2.devices.allow: c 226:128 rwm
lxc.mount.entry: /dev/dri/card0 dev/dri/card0 none bind,optional,create=file
lxc.mount.entry: /dev/dri/renderD128 dev/dri/renderD128 none bind,optional,create=file
```
- 安装jellyfin
```
apk add jellyfin jellyfin-web font-noto-cjk font-noto-cjk-extra && rc-update add jellyfin
```