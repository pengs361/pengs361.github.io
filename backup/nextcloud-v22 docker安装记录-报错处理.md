安装完进去以后检查会有报错，解决方法如下
1.您的安装没有设置默认的电话区域。这对验证配置设定中没有国家代码的电话号码而言是必需的。要允许没有国家代码的电话号码，请添加带区域相应的 ISO 3166-1 code ↗ 的“默认_电话_区域”到你的配置文件中。
在网站配置文件config.php中添加如下代码后保存即可

    'default_phone_region' => 'CN',

2.您的网页服务器未正确设置以解析“/.well-known/webfinger”。更多信息请参见文档。
3.您的网页服务器未正确设置以解析“/.well-known/nodeinfo”。更多信息请参见文档。
解决方法在容器中nginx的配置文件中添加如下代码 （/etc/nginx/conf.d/default.conf)
```
    location = /.well-known/webfinger { return 301 https://n.cciz.cc:8086/index.php/.well-known/webfinger; }
    location = /.well-known/nodeinfo  { return 301 https://n.cciz.cc:8086/index.php/.well-known/nodeinfo; }
```
4.安全及设置警告显示“ 内存缓存未配置,在config.php中array结尾大括号后面添加，***注意host***
```
  'memcache.local' => '\OC\Memcache\Redis',
  'memcache.locking' => '\OC\Memcache\Redis',
    'redis' => array(
    'host' => 'nextcloud-redis',
    'port' => 6379,
  ),

```
5.使用caddy反代https后，登录界面没反应，在config.php中添加以下代码
`'overwriteprotocol' => 'https',`
6.cron运行出现问题，在宿主机cron里添加
` */5 * * * * docker exec --user nextcloud nextcloud-web php cron.php`