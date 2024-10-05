**1、去除封面方块**
进入容器的 bash，
docker exec -it jellyfin /bin/bash
依次输入以下命令：
apt update
apt install fonts-noto-cjk-extra
重启容器。

    docker exec -it jellyfin bash -c "apt update -y && apt install fonts-noto-cjk-extra -y" && docker restart jellyfin

**2、为字幕添加中文备用字体**
在 Jellyfin 挂载的目录中，新建一个文件夹 fonts。我放在了挂载的 config 目录中。
首先下载 [Noto Sans SC woff2][1] 字体包。
解压后找到 NotoSansCJKsc-Medium.woff2 这个文件，将其复制到上面说的 fonts 目录中。
然后在控制台-播放中设置启用备用字体：


  [1]: https://github.com/CodePlayer/webfont-noto/raw/master/release/NotoSansCJKsc-hinted-standard.zip