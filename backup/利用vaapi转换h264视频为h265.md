**1、安装linux下intel闭源驱动**

``apt install intel-media-va-driver-non-free i965-va-driver-shaders``

**2、转换命令**
``ffmpeg -hwaccel vaapi -vaapi_device /dev/dri/renderD128 -hwaccel_output_format vaapi -i test.m4 -c:v hevc_vaapi -c:a copy -qscale:v 18 test-265.mp4``