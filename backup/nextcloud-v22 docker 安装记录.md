1、docker-compose.yml文件如下，拷贝时候注意缩进，不然docker会报错
```
version: '3'

networks:
  network:
   external: false

services:
  nextcloud:
    image: ghcr.io/wonderfall/nextcloud:22
    container_name: nextcloud-web
    depends_on:
      - nextcloud-db # If using MySQL
      - nextcloud-redis # If using Redis
    environment:
      - UID=1000
      - GID=1000
      - UPLOAD_MAX_SIZE=10G
      - APC_SHM_SIZE=128M
      - OPCACHE_MEM_SIZE=128
      - CRON_PERIOD=15m
      - TZ=Europe/Berlin
      - DOMAIN=localhost
      - ADMIN_USER=pengs361
      - ADMIN_PASSWORD=Yyp2020@
      - DB_TYPE=mysql
      - DB_NAME=nextcloud
      - DB_USER=nextcloud
      - DB_PASSWORD=Yyp2020@
      - DB_HOST=nextcloud-db
    volumes:
      - /data/data0/user:/nextcloud/data
      - ./nextcloud-web/config:/nextcloud/config
      - ./nextcloud-web/apps2:/nextcloud/apps2
      - ./nextcloud-web/themes:/nextcloud/themes
      - ./nextcloud-web/nginx/conf.d:/etc/nginx/conf.d
    networks:
      - network
    ports:
      - 8806:8888
    restart: unless-stopped

  nextcloud-db:
    image: mariadb:10.6.5
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW --innodb-file-per-table=1 --skip-innodb-read-only-compressed  #maybe not needed in the future
    container_name: nextcloud-db
    volumes:
      - ./nextcloud-db/db:/var/lib/mysql
      - ./nextcloud-db/my.cnf:/etc/mysql/my.cnf
    environment:
      - MYSQL_ROOT_PASSWORD=Yyp2020@
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_PASSWORD=Yyp2020@
    networks:
      - network
        # ports:
        #- 3306:3306
    restart: unless-stopped

  nextcloud-redis:
    image: redis:alpine
    container_name: nextcloud-redis
    volumes:
      - ./nextcloud-redis/data:/data
    networks:
      - network
    restart: unless-stopped

```
2、容器启动完成后，nextcloud安装过程中会有权限错误，可用
```
 sudo chown -R 1000:1000 nextcloud-web/ && sudo chown -R 1000：1000 /data/data0/user && touch nextcloud-web/config/CAN_INSTALL
```
3、配置数据库的时候主机要将端口号也写上如：**nextcloud-db:3306**
4、如果一次没有配置成功，需要重新配置的话，记得一定要将mariadb原数据库相关文件全部删除
5、尽量提前配置好caddy tls，第一次设置nextcloud的时候使用https
6、迁移用户数据文件
```
docker exec --user www-data nextcloud php occ files:scan --all
docker exec --user www-data nextcloud php occ files:scan-app-data
docker exec --user www-data nextcloud php occ preview:pre-generate
```
7、优化上传
`docker exec --user nextcloud nextcloud-web php occ config:app:set files max_chunk_size --value 0`
8、优化mysql数据库参数
docker console至/etc/mysql/my.cnf 追加以下参数并重启数据库。
`innodb_flush_log_at_trx_commit = 0`
数据库登录命令 mysql -u root -p
登录数据库以后参数查询 SHOW VARIABLES like '%flush%';