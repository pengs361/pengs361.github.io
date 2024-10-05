以5块硬盘创建raid 5

    mdadm --create --verbose /dev/md0 --level=5 --raid-devices=5 /dev/sd{a1,b1,c1,d1,e1}

在我们重启之前：

    mdadm --detail /dev/md0

会看到我们这个分配的阵列的详细信息，里面有一条UUID，我们将这行id复制下来。
然后修改配置文件：

    vim /etc/mdadm/mdadm.conf

在这个文件里面靠前的一行加上：

    ARRAY /dev/md0 UUID=上面复制下来的id

保存退出。
或者使用以下命令写入mdadm配置
`mdadm -D -s > /etc/mdadm/mdadm.conf`
*最后最重要的一步就是要更新initramfs使你的的mdadm配置保存在启动配置过程中。*

    update-initramfs -u