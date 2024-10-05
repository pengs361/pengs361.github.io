1、安装完每次启动都会调整权限，这个时间取决于图片库文件数量，通常会很长时间，可以修改启动脚本解决

    docker exec -it lychee-web bash -c "sed -i 's/sym\ \/uploads/sym/g' /entrypoint.sh"
2、出于安全考虑，lychee官方不再支持修改land登录背景为在线背景，可以进入容器然后修改配置文件 config/secure-headers.php
 

    docker exec -it lychee-web bash

    sed  -i "/'https:\/\/c.tile.osm.org\/',/a\                                'https:\/\/go.fuyeor.com\/ran\/pic'," config/secure-headers.php

附记
服务器同步照片命令
    docker exec -d  -it lychee-web bash -c " php artisan lychee:sync --skip_duplicates  -vvv /uploads/import/ --album_id=_I5MQmWwv-dsnFd3-Yaec9il" 