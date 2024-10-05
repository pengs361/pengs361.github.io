vi或者vim打开文件后发现里面的中文乱码，可以设置一下编码：

修改 ~/.vimrc文件，修改如下
```
set fileencodings=utf-8,gb2312,gb18030,gbk,ucs-bom,cp936,latin1
set enc=utf8
set fencs=utf8,gbk,gb2312,gb18030
```
然后wq保存退出即可
