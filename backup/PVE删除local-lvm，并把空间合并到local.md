**1、 删掉 local-lvm**

    lvremove pve/data
**2、将剩余空间全部扩充到 local 中**

    lvextend -l+100%FREE /dev/mapper/pve-root
    resize2fs /dev/mapper/pve-root
**3、webui数据中心中移除local-lvm**
**4、查看空间分布 lvs 或者 df -h**