### 1.登录
`docker login`
### 2.打包容器成镜像
`docker commit web302 web32:v1`
### 3.给镜像打标签
`docker tag web32:v1 pen36/web32:v1`
### 4.推送镜像
`docker push pen36/web32:v1`