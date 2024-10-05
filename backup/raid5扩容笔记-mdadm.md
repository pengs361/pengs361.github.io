**1. 确认要替换的硬盘，并标记为失效，移除**

    mdadm /dev/md0 --fail /dev/sda1 --remove /dev/sda1

**1. 在线拆除失效硬盘，并更换新硬盘，然后重新添加进raid**

    mdadm -a /dev/md0 /dev/sda1

**1. 等待阵列重建完成，依次更换其他硬盘**
**1. 扩展阵列容量至最大可用**

    mdadm /dev/md0 -z max

**1. 扩展文件系统**

    resize2fs /dev/md0

参考资料：
[https://documentation.suse.com/sles/12-SP4/html/SLES-all/cha-raid-resize.html][1]


  [1]: https://documentation.suse.com/sles/12-SP4/html/SLES-all/cha-raid-resize.html