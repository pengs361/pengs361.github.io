1、 安装php

     apt install php-cgi php-fpm php-curl php-gd php-mbstring php-xml php-sqlite3 sqlite3 -y


 2、安装typecho
 

     wget  https://typecho.org/downloads/1.1-17.10.30-release.tar.gz -O typecho.tar.gz
     mkdir -p /var/www/typecho && tar xzvf typecho.tar.gz -C /var/www/typecho/
     mv /var/www/typecho/build/* /var/www/typecho && rm -rf typecho.tar.gz /var/www/typecho/build
     chmod -Rf 755 /var/www/typecho/*  &&  chown www-data:www-data -R /var/www/

 
3、安装caddy 2

    apt update && apt install apt-transport-https ca-certificates -y
    rm -rf /etc/apt/sources.list.d/caddy-fury.list
    echo "deb [trusted=yes] https://apt.fury.io/caddy/ /" | tee -a /etc/apt/sources.list.d/caddy-fury.list
    apt update && apt install caddy -y
配置/etc/caddy/Caddyfile,注意版本号php7.3-fpm不同的话使用ls /run/php/查看

    findyu.tk
    root * /var/www/typecho
    encode zstd gzip
    file_server
    php_fastcgi unix//run/php/php7.3-fpm.sock
4、运行服务

    systemctl restart php7.3-fpm && systemctl restart caddy

参考资料：https://obvps.com/2020/07/29/d10c2tls.html