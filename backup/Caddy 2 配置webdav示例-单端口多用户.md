**记录备忘**
```
{
    order webdav before file_server
}
xxx.ml:
{
       file_server {
    root  /var/www/
    browse
        }
       reverse_proxy /img localhost:260
       tls /var/crt/xxx.ml.crt /var/crt/xxx.ml.key
       header {
        # enable HSTS
        Strict-Transport-Security max-age=31536000
        X-Content-Type-Options nosniff
        X-Frame-Options DENY
        Referrer-Policy no-referrer-when-downgrade
              }
       # 密码不能为明文，可以使用自带的工具加密：
       # caddy hash-password  --plaintext sdderght
       #多用户配置如下，注意提前创建用户文件夹并设置读写权限
       webdav /xyz/* {
       root /data/data1
       prefix /xyz
             }
       basicauth /xyz/* {
       user1 JDJhJDE0JFBhLnlxMWYubXU2ekJSaVJaT0Q1ZHVPVTdpWlZoYUh2dGhWQnRxc01TbzdTTWJrTzNh
       }
       webdav /abc/* {
       root /data/data2
       prefix /abc
              }
       basicauth /abc/* {
       user2 JDJhJDE0JFBhLnlxMWYubXU2ekJSaVJaT0Q1VTFUZ2dpWlZoYUh2dGhWQnRxc01TbzdTTWJrTzNh
       }          
}
```