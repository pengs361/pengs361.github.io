想必大家都用习惯windows的待机，但是ubuntu的挂起总是让人很头痛，每次挂起出去了，回来后就打不开，硬盘启动，灯都亮的很正常，就是屏幕是黑色的。下面让我们来一起解决这个问题：

首先安装这个包：sudo apt-get install pm-utils 

由于缺失laptop_mode，导致系统无法唤醒，发现只要打开laptop_mode，Laptop挂起之后无法唤醒的问题已经就不存在了。关于laptop_mode 在默认情况下，你通过安装完系统到笔记本上后，就安装上了laptop-mode-tools工具包。如果你不缺认自已是否安装了laptop-mode-tools工具包，可以在终端中输入下列命令来确认是否安装。 

dpkg -l | grep laptop-mode-tools 

如果你的电脑执行命今后无结果输出，那么你可以通过下列命令来安装。 

sudo apt-get install laptop-mode-tools 

虽然系统已自动安装了laptop-mode-tools，但是是不是就自动启动了laptop_mode模式了呢？我们用下列命令来判断Laptop是否启用了laptop_mode，如果显示结果为0，则表示未启动，如果为非0的数字则表示启动了。 

cat /proc/sys/vm/laptop_mode

怎样启动laptop_mode模式呢？希望在AC供电的情况下也打开 Laptop Mode，首先需要编辑
sudo gedit /etc/laptop-mode/laptop-mode.conf
设置ENABLE_LAPTOP_MODE_ON_AC=1

启动laptop_mode模式：
sudo laptop_mode start
或者
sudo laptop_mode start force

判断是否启用了laptop_mode，如果显示结果为0，则表示未启动，如果为非0的数字则表示启动了。
cat /proc/sys/vm/laptop_mode
也可以通过输入sudo laptop_mode status 查看 laptop_mode报告的详细状态。

版权声明：本文为遵循 CC 4.0 BY-SA 版权协议。
原文链接：https://blog.csdn.net/muyangzuo/article/details/17332275 