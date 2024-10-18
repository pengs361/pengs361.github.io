### 客户端安装(不安装会提示Guest Agent未运行)

- Linux
```
#for debian/ubuntu
apt install qemu-guest-agent -y
```
- Windows
直接使用virtio驱动光盘安装。如果是win7/xp需要手动进入光盘，找到agent目录，选择32位和64位就行

### 服务器使用agent
对于安装好agent的vm，在其概况界面，会显示VM的网卡信息。
更加全面的用法如，需要用到qm agent命令 语法如下
` qm agent <vmid> <cmd>`
cmd就是命令如下
```
 fsfreeze-freeze 
 fsfreeze-status
 fsfreeze-thaw
 fstrim                      #查看ssd——trim
 get-fsinfo                  #查看磁盘信息
 get-host-name               #查看主机名
 get-memory-block-info       #查看内存块 信息
 get-memory-blocks           #查看您内存
 get-osinfo                  #查看系统信息
 get-time                    #查看时间
 get-timezone                #查看时区
 get-users                   #用户
 get-vcpus                   #查看CPU数量
 info                        #查看支持的命令
 network-get-interfaces      #查看网络
 ping                        #不明    
 shutdown                    #关机
 suspend-disk                #休眠，储存到硬盘
 suspend-hybrid              #休眠，混合
 suspend-ram                 #挂起/休眠 内存
```
**qm guest 命令集合**
qm agent就是qm guest。qm guest主要有下面四个
```
qm guest cmd
qm guest exec
qm guest exec-status
qm guest passwd
```
1、qm guset cmd
此项等同于qm agent
2、qm guest exec（创建进程）
此项是传递给VM的命令
```
qm guest exec <vmid> <vmcmd> --<option>
<vmid>=vmid
<vmcmd>=vm里面的命令。例如ip link /docker ps等等。命令不能有“-”，因为加了“-”，就会设别成后面的<option>
<option>=这个是特别操作，有3个
pass-stdin=<0/1> 这个似乎不能用
synchronous=<0/1> 如果是0，则返回pid。如果是1，则返回json格式的输出结果
timeout=<整数数字> 超时时间
```
举几个例子
1、查看usr目录
`qm guest exec 108 ls /usr `

3、qm guest passwd  (重置密码)
此项非常有用
```
#语法如下
qm guest passwd <vmid> <username> [OPTIONS]

#[OPTIONS]只有一个 --crypted=<0/1> 是否加密密码 默认0
实例
qm guest passwd 108 root 
#直接更改密码
qm guest passwd 108 administrator
#适用于更改windows操作系统密码
#至于后面的--crypted= 一般不加，都是加密了的密码
```
[参考链接](https://foxi.buduanwang.vip/virtualization/pve/530.html/)