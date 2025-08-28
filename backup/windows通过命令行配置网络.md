通过命令行设置Windows IP地址和网关主要使用`netsh`命令，具体操作如下：
- **设置动态获取IP地址和网关**：打开命令提示符，输入`netsh interface ip set address name="本地连接" source=dhcp`，按下回车键即可。其中，`name`后的参数是网络连接名称，可根据实际情况修改，如“无线网络连接”等。
- **设置固定IP地址和网关**：若要设置固定IP地址和网关，假设IP地址为192.168.0.110，子网掩码为255.255.255.0，网关为192.168.0.1，可在命令提示符中输入`netsh interface ip set address name="本地连接" source=static addr=192.168.0.110 mask=255.255.255.0 gateway=192.168.0.1`并回车。