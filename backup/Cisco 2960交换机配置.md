### 1、 Cisco工作模式分类及作用

用户模式仅答应基本的监测命令，在这种模式下不能改变路由器的配置。

Switch>       用户模式

 

允许用户执行所有的测试、查看、保存等命令，这种模式下不能进行路由器配置的修改，一般此模式建议设置密码保护。

Switch>enable 进入特权模式

Switch#

 

允许用户配置路由器。

Switch#configure terminal    进入全局模式

Switch(config)#

 

允许用户配置fastEthernet 0/1接口。

Switch(config)#interface fastEthernet 0/1       进入配置fa 0/1接口模式

Switch(config-if)#

### 2、 基本操作

 

全局模式下修改交换机名称

Switch(config)#hostname test01(交换机名称)

 

全局模式下设置登陆特权加密密码

Switch(config)#enable secret  123456

 

全局模式下设置登陆特权非加密密码

Switch(config)#enable password 123456

 

特权模式下查看Vlan信息

Switch#show vlan

 

特权模式下查看端口信息

Switch#show interfaces fa0/1

 

特权模式下查看交换机系统版本、型号、开机时间等等

Switch#show version

### 3、 设置交换机时间

 

标注：普通思科交换机一般不带电池保存时间，交换机重启后时钟都会恢复到初始化时间，建议配置NTP服务。

特权模式下显示交换机时间

Switch#show clock

特权模式下修改交换机时间

Switch#clock set 17:42:00 22 Mar 2017

 

 

 

 
### 4、 配置Vlan

 

特权模式下进入Vlan子模式

Switch#vlan database

 

创建vlan并命名为test01

Switch(vlan)#vlan 10 name test01

 

退出Vlan配置模式

Switch(vlan)#exit

 

返回到特权模式下查看Vlan创建情况

Switch#show vlan

 

 

 

 

删除Vlan

 

特权模式下进入Vlan子模式

Switch#vlan database

 

删除已创建好的Vlan

Switch(vlan)#no vlan 10

 

返回到特权模式下查看指定的Vlan创建情况

Switch#show vlan id 10

 

 

 

 

### 5、 将端口划入指定的Vlan

 

全局模式下进入fa/01端口模式

Switch(config)#interface fastEthernet 0/1

 

将fa0/1端口划分到Vlan 10

Switch(config-if)#switchport access vlan 10 

 

fa0/1设置成静态Vlan访问模式

Switch(config-if)#switchport mode access

 

激活fa0/1接口

Switch(config-if)#no shutdown

 

全局模式下进入fa/02端口到fa0/10端口模式

Switch(config)#interface range fastEthernet 0/2-10

 

将入fa/02端口到fa0/10端口划分到Vlan10

Switch(config-if-range)#switchport access vlan 10

 

 fa/02端口到fa0/10端口设置成静态Vlan访问模式

Switch(config-if-range)#switchport mode access

 

激活fa/02端口到fa0/10端口

Switch(config-if-range)#no shutdown

 

返回到特权模式下查看指定的Vlan创建情况

Switch#show vlan id 10

 

特权模式下保存配置

Switch#write

 

 

 

 

### 6、将端口划出指定的Vlan

 

全局模式下进入fa/01端口模式

Switch(config)#interface fastEthernet 0/1

 

 

将fa0/1端口从Vlan 10划出(把fa0/1端口从Vlan10删除)

Switch(config-if)#no switchport access vlan 10

 

全局模式下进入fa/02端口到fa0/10端口模式

Switch(config)#interface range fastEthernet 0/2-10

 

把fa0/2端口和fa/10从Vlan 10划出(把fa0/1端口从Vlan10删除)

Switch(config-if-range)#no switchport access vlan 10

 

特权模式下保存配置

Switch#write

 

 

 

 

### 7、 设置交换机端口工作模式

 

标注：思科交换机端口三种工作模式

access     一个access端口只能属于一个Vlan,也只能转发这个Vlan数据，主要用于接入终端设备、如PC、服务器、打印服务器等

trunk     一个trunk端口属于多个Vlan,能转发多个Vlan数据，主要用于连接其它交换机、以便在线路上承载多个Vlan

dynamic   动态可取模式，主动对端协商，也就是通常的Trunk模式优先。在可以和对端协商成trunk模式时使用trunk模式，不行则改为access模式。

 

全局模式下进入fa/01模式

Switch(config)#interface fastEthernet 0/1

 

查看交换机支持哪些端口工作模式

Switch(config-if)#switchport mode ?

access Set trunking mode to ACCESS unconditionally 

dynamic Set trunking mode to dynamically negotiate access or trunk mode 

trunk Set trunking mode to TRUNK unconditionally

 

将fa0/1端口设置成Access模式

Switch(config-if)#switchport mode access

 

将fa0/1端口设置成Trunk模式

Switch(config-if)#switchport mode dynamic

 

将fa0/1端口设置成Trunk模式

Switch(config-if)#switchport mode trunk

 

特权模式下查看端口工作模式

Switch#show interfaces fastEthernet 0/1 switchport

Name: Fa0/1

Switchport: Enabled

Administrative Mode: trunk

Operational Mode: down

 

特权模式下保存配置

Switch#write

 

 

 

 

### 8、 双工模式设置

 

全局模式下进入fa0/1端口

Switch(config)#interface fastEthernet 0/1

 

自行选择，full全双工模式、half半双工模式、auto自动选择模式

Switch(config-if)#duplex full

 

查看fa0/1端口双工模式

Switch#show interfaces fastEthernet 0/1

Encapsulation ARPA, loopback not set

Keepalive set (10 sec)

Full-duplex, 100Mb/s

 

保存配置

Switch#write

 

 

 

 

### 9、配置Vlan的IP地址及网关

 

全局模式下进入指定vlan 10

Switch(config)#interface vlan 10

 

配置vlan 10的IP地址及子网掩码

Switch(config-if)#ip address 192.168.10.1 255.255.255.0

 

全局模式下设置交换机所连域的域名test.com

Switch(config)#ip domain-name test.com

 

激活端口

Switch(config-if)#no shutdown

 

全局模式下设置网关地址

Switch(config)#ip default-gateway 192.168.10.254

 

特权模式下查看vlan及接口状态

Switch#show ip interface brief

 

特权模式下查看交换机网关地址

Switch#show running-config

 

特权模式下保存配置

Switch#write

 

 

 

 

### 10、配置telnet远程登录

 

全局模式下设置登陆特权加密密码，telnet远程登录需要先设置特权登录密码

Switch(config)#enable secret  123456

 

全局模式下进入虚拟线程配置模式， 0到4意思是最多同时允许0，1，2，3，4的5个用户远程telnet登录

Switch(config)#line vty 0 4

 

设置登录口令(远程telnet登录交换机密码)

Switch(config-line)#password 654321

 

设置远程telnet需要口令验证

Switch(config-line)#login

 

特权模式下查看telnet配置情况

Switch#show running-config

line vty 0 4

password 654321

login

 

特权模式下保存配置

Switch#write

 

 

 

 

### 11、恢复交换机出厂设置

 

特权模式下执行出厂恢复设置，弹出提示按回车键确认

Switch#write erase

 

特权模式下重启交换机，弹出提示按回车键确认

Switch#reload

 

 

 

### 12、使用IPSG绑定IP地址(Port/IP/MAC三者绑定)

 

在特权模式下查看Port/IP/MAC绑定情况

Switch# show ip source binding

 

在特权模式下查看192.168.10.10 的Port/IP/MAC绑定情况

Switch# show ip source binding | include 192.168.10.10

 

特殊模式下查看192.168.10.10 的IP地址对应的物理地址与所属于VLAN

Switch# show arp | include 192.168.10.10 

 

特殊模式下查看448a.5b00.12a1 的MAC地址对应的端口

Switch#show mac address-table | include 448a.5b00.12a1

 

全局模式下绑定IP地址(Port/IP/MAC三者绑定)

Switch(config)# ip source binding 448a.5b00.12a1 vlan 192.168.10.10 interface GI0/12

 

 

 

### 13、交换机配置trunk端口 (trunk允许多个Vlan通过，access只允许一个Vlan通过)

 

标注：三层交换机与二层交换机设置级连，三层交换端口默认dyna auto,dyna auto端口能同步下级交换机端口工作模式trunk，

三层交换机会自动适应成trunk，所以，只要配置二层交换机端口为trunk即可。

全局模式下进入fa0/24端口进行配置

Switch(config)#interface fastEthernet 0/24

 

设置trunk口，允许多个 Vlan通过，一般接到三层交换机上的trunk口

Switch(config-if)#switchport mode trunk

激活端口

Switch(config-if)#no shutdown

 

特权模式下保存配置

Switch#write

 

查看fa0/24接口否配置成trunk

Switch#show interfaces fastEthernet 0/24 switchport

Name: Fa0/24

Switchport: Enabled

Administrative Mode: trunk
文章来源：https://www.cnblogs.com/zoulongbin/p/6625153.html
