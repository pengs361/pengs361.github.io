pve下 vm 可以在选项里面直接修改名字，lxc容器需要自行修改文件。
```
/var/lib/lxc/容器的id编号/config
/etc/pve/lxc/容器的id编号.conf
```
只修改后面这个文件也可以