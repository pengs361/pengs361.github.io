youtube-dl 视频网址 --external-downloader aria2c --external-downloader-args "-x 16 -k 1M"

–external-downloader aria2c   #调用外部下载工具aria2c
–external-downloader-args     #外部下载工具指定参数
例：

    youtube-dl -f 251 "https://www.youtube.com/watch?v=9mplI5qEhxk" --external-downloader aria2c --external-downloader-args "-x 16 -k 1M"