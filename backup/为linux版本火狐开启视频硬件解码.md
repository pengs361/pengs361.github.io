1、为 Firefox 启用 VA-API 支持

在 Firefox 中打开 about:config

搜索 `media.ffmpeg.vaapi.enabled`，并设置为true

搜索`media.ffvpx.enabled`，并设置为false
2、对于 X11 用户：

在 Firefox 中打开 about:config

设置 `gfx.x11-egl.force-enabled` 为 true

设置 `gfx.x11-egl.force-disabled` 为 false

对于 Wayland 用户：

添加一个 MOZ_ENABLE_WAYLAND=1 的环境变量即可。

    Linux 下设置环境变量没有固定的方法。你可以参考https://blog.lilydjwg.me/2020/7/22/linux-environment-variables.215496.html 和 Environment variables (简体中文) 。我采用的方法是直接编辑 /etc/environment。也就是说在 /etc/environment 中加入下面这一行：
    export MOZ_ENABLE_WAYLAND=1
    完成之后，重启计算机以使更改生效。