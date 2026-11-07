#### 测试连接
`./adb devices`
#### 查看已安装软件包
```
# 全部包（系统+第三方，最常用）
./adb shell pm list packages

# 只看【系统预装应用】（你要卸载的主要在这里）
./adb shell pm list packages -s

# 只看第三方自己装的
./adb shell pm list packages -3

# 包含你之前adb卸载掉的（--user 0移除的），用来找已经卸载的包名
./adb shell pm list packages -u

# 同时显示APK文件路径
./adb shell pm list packages -f
```

- `-s` 系统包
- `-3` 第三方包
- `-d` 仅已停用 disable 的包
- `-u` 包含用户卸载（pm uninstall --user 0）的包
- `-f` 附带 apk 路径
- `-i` 附带安装来源

#### 禁用软件包
```
# 卸载命令
./adb shell pm uninstall -k --user 0 包名
-k：保留数据和缓存；删掉 -k就是同时清除数据
-user 0：主用户（就是你正在用的这个用户）
成功会返回：Success

# 停用命令
./adb shell pm disable-user --user 0 包名

#冻结命令
./adb shell pm suspend --user 0 包名
```

#### 恢复命令
```
# 恢复被pm uninstall的应用
./adb shell pm install-existing --user 0 包名
# 恢复被disable停用的
./adb shell pm enable --user 0 包名
# 恢复被冻结停用的
./adb shell pm unsuspend --user 0 包名

```
