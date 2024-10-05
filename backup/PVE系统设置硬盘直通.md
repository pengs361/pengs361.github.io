PVE系统直通硬盘有两种方式，
1.方法一命令操作，映射直通单块硬盘；
2.方法二添加 PCI设备，直通 SATA Controller(SATA 控制器)。
方法一：命令操作，直通单块硬盘
1、查看磁盘ID

    ls -l /dev/disk/by-id/
注：ata、mmc等…表示接口方式，通常有ATA、SATA、SCS、NVME、eMMC和SASI等类型。IDE和SATA接口一般为“ata”，SCSI及SAS接口一般为”scsi“。
2、导入虚拟机磁盘

    qm set <vm_id> –<disk_type>[n] /dev/disk/by-id/<type>-$brand-$model_$serial_number
<vm_id> : 为创建虚拟机时指定的VM ID。
<disk_type>[n]： 导入后的磁盘的总线类型及其编号，总线类型可以选择IDE、SATA、VirtIO Block和SCSI类型，编号从0开始，最大值根据总线接口类型有所不同，IDE为3，SATA为5，VirTIO Block为15，SCSI为13。
/dev/disk/by-id/-brand-brand−model_$serial_number ： 为磁盘ID的具体路径和名称。
命令示例：
    qm set 102 -sata2 /dev/disk/by-id/ata-ST4000VX000-2AG166_ZGY163KG

LXC直通硬盘
```
blkid /dev/sdx
pct set 100 -mp0 /dev/disk/by-uuid/uuid,mp=<mount point>
```
