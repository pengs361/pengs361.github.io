rootless模式下，docker容器在帐户退出后也会终止，可以使用以下命令避免logout以后容器进程被杀掉
```
loginctl enable-linger $UID
```
`出处：https://stackoverflow.com/questions/73299883/docker-containers-terminate-on-shell-logout`