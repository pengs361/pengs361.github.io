1、在Debian系统及其衍生发行版中安装：

    apt-get install  fcitx5-frontend-qt5 fcitx5-frontend-gtk2 fcitx5-frontend-gtk3 fcitx5-pinyin fcitx5-chinese-addons fcitx5-chewing fcitx5-module-lua fcitx5-module-lua-common fcitx5-modules unicode-cldr-core

配置相应文件
配置/etc/environment文件或~/.pam_environment文件。
2、若配置/etc/environment文件，则在该文件中输入如下内容：
```
XIM=fcitx5
XIM_PROGRAM=fcitx5
GTK_IM_MODULE=fcitx5
QT_IM_MODULE=fcitx5
XMODIFIERS=@im=fcitx5
SDL_IM_MODULE=fcitx5
GLFW_IM_MODULE=fcitx5
```