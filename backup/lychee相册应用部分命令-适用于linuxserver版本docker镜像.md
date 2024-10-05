服务器端导入命令

    docker exec -it lychee bash -c "cd app/lychee && php artisan lychee:sync --skip_duplicates  -vvv /pictures/import/"

服务器端导入到特定相册

    php artisan lychee:sync /path/to/import --album_id="album ID
服务器端日志清理

    docker exec -it lychee bash -c "cd app/lychee && php artisan lychee:logs clean"