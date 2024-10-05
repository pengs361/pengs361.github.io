- 方法一
创建配置文件
~/.docker/config.json
内容如下
```
"proxies": {
   "default": {
     "httpProxy": "socks5://127.0.0.1:1080",
     "httpsProxy": "socks5://127.0.0.1:1080",
     "noProxy": "127.0.0.0/8"
   }
}
```
- 方法二
创建配置文件和文件夹
/etc/systemd/system/docker.service.d/proxy.conf
配置文件内容如下
```
[Service]
Environment="HTTP_PROXY=socks5://127.0.0.1:1080"
Environment="HTTPS_PROXY=socks5://127.0.0.1:1080"
```
重启Docker服务
```
systemctl daemon-reload
systemctl restart docker
```
`来源：https://t2.re/archives/1168/`
