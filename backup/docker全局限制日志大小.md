创建或修改文件 `/etc/docker/daemon.json`，并增加以下配置
```
{
    "log-driver":"json-file",
    "log-opts":{
        "max-size" :"50m","max-file":"1"
    }

}
```
随后重启 Docker 服务
```
$ sudo systemctl daemon-reload

$ sudo systemctl restart docker
```
不过已存在的容器不会生效，需要重建才可以！