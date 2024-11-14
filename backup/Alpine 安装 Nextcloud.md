

记录 Apline 安装 LAMP 栈，部署 Nextcloud 开源网盘。

- 更换为国内源。

```
sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
apk update
```

- 安装 sshd 。（可选）

```
apk add openssh
service sshd start
rc-update add sshd

```

- 安装 LAMP Stack

- 安装 Apache PHP Mariadb。

`apk add apache2 apache2-ssl apache2-proxy apache-mod-fcgid apache2-http2 mariadb mariadb-client php83 php83-apache2 php83-pdo_mysql`

- 安装 Nextcloud 相关 PHP 模块

`apk add php83-common php83-ctype php83-curl php83-dom php83-fileinfo php83-gd php83-json php83-xml php83-mbstring php83-openssl php83-posix php83-session php83-simplexml php83-xmlreader php83-xmlwriter php83-zip php83-bz2 php83-intl php83-pecl-imagick php83-gmp php83-bcmath php83-pcntl php83-sodium php83-opcache php83-exif php83-sysvsem imagemagick-svg icu-data-full
`

- 配置数据库

```
rc-service mariadb setup
rc-service mariadb start
mysql_secure_installation
```

- 安装 Nextcloud

下载最新的 Nextcloud ，设置权限。

```
wget https://download.nextcloud.com/server/releases/latest.zip
unzip latest.zip -d /srv
chown -R apache:apache /srv/nextcloud
```

- 创建 Nextcloud 数据库

`mysql -u root -p`

替换 username 和 password 。

```
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
CREATE DATABASE IF NOT EXISTS nextcloud CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
GRANT ALL PRIVILEGES ON nextcloud.* TO 'username'@'localhost';
FLUSH PRIVILEGES;
EXIT
```

- 配置 Apache

上传 SSL 证书到 /etc/ssl/your.server.com 文件夹。 修改 your.server.com 。

```
cat > /etc/apache2/conf.d/nextcloud.conf <<EOF
<VirtualHost *:80>
   ServerName 10.10.10.188
   DocumentRoot /srv/nextcloud/

   <Directory /srv/nextcloud/>
     Require all granted
     AllowOverride All
     Options FollowSymLinks MultiViews

     <IfModule mod_dav.c>
       Dav off
     </IfModule>
   </Directory>
</VirtualHost>
EOF
```

- 启用 rewrite 模块。 编辑 etc/apache2/httpd.conf ，搜索 rewrite_module，取消注释。

`sed -i 's@^#LoadModule rewrite_module modules/mod_rewrite\.so@LoadModule rewrite_module modules/mod_rewrite.so@' /etc/apache2/httpd.conf`

- 启动 LAMP

启动服务并添加自启服务。

```
rc-service apache2 start

rc-update add apache2
rc-update add mariadb
```

**优化**

- PHP 内存限制

修改 /etc/php83/php.ini 。查找 memory_limit ，改为大于等于 512M 的值。
大文件上传

- 修改 /srv/nextcloud/.user.ini ，添加下面内容。

```
upload_max_filesize=16G
post_max_size=16G
max_input_time=3600
max_execution_time=3600
```

- 客户端修改

Windows 客户端修改 %APPDATA%\Nextcloud\nextcloud.cfg，[General] 下添加：

maxChunkSize=99999999

- 使用内存缓存

`apk add php83-pecl-apcu`

修改 Nextcloud 配置，设置 apcu。

vi /srv/nextcloud/config/config.php

添加一行。

`  'memcache.local' => '\OC\Memcache\APCu',`

启用apcu，vi /etc/phpxx/php.ini
`apc.enable_cli=1`

- 配置 Redis 事务文件锁定

```
apk add redis php83-pecl-redis
addgroup apache redis
rc-service redis start
rc-update add redis
```

修改 Nextcloud 配置，设置 Redis。

```
  'filelocking.enabled' => true,
  'memcache.locking' => '\OC\Memcache\Redis',
  'redis' => array(
       'host' => '/var/run/redis/redis.sock',
       'port' => 0,
       'timeout' => 0.0,
        ),
```

- 配置后台服务

`crontab -u apache -e`

添加一行。

`*/5  *  *  *  * php83 --define apc.enable_cli=1 -f /srv/nextcloud/cron.php`

修改 Nextcloud 配置。

`  'maintenance_window_start' => 1,`

重启 apache 生效。

`service apache2 restart`

- 其他

配置电话国际区号。修改 Nextcloud 配置。

`  'default_phone_region' => 'CN',`
配置php内存1024M /etc/phpxx/php.ini
`memory_limit = 1024M`

参考 [https://ztengfun.com/alpine-%E5%AE%89%E8%A3%85-nextcloud/](url)