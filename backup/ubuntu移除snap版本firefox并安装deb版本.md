- **卸载 Snap Firefox**
`sudo snap remove firefox`
删除其中的火狐残留
`sudo rm -rf /var/lib/snapd/seed/snaps/firefox_*.snap`
- **安装标准版 Firefox**
创建一个保存 APT 库密钥的目录：
    `sudo install -d -m 0755 /etc/apt/keyrings`
    导入 Mozilla APT 密钥环：
    `wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | sudo tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null`
    如果没有安装 wget，请通过命令 sudo apt-get install wget 安装。
    密钥指纹应该是 35BAA0B33E9EB396F59CA838C0BA5CE6DC6315A3。你可以用以下命令检查：
```
    gpg -n -q --import --import-options import-show /etc/apt/keyrings/packages.mozilla.org.asc | awk '/pub/{getline; gsub(/^ +| +$/,""); if($0 == "35BAA0B33E9EB396F59CA838C0BA5CE6DC6315A3") print "\nThe key fingerprint matches ("$0").\n"; else print "\nVerification failed: the fingerprint ("$0") does not match the expected one.\n"}'
```
    把 Mozilla APT 库添加到源列表中：
```
    echo "deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main" | sudo tee -a /etc/apt/sources.list.d/mozilla.list > /dev/null
```
    配置 APT 优先使用 Mozilla 库中的包：
```
    echo '
    Package: *
    Pin: origin packages.mozilla.org
    Pin-Priority: 1000
    ' | sudo tee /etc/apt/preferences.d/mozilla
```
    更新软件列表并安装 Firefox .deb 包： 
`sudo apt-get update && sudo apt-get install firefox`
