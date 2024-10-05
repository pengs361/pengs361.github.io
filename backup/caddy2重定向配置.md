```
xx.cciz.cc
{
        reverse_proxy * localhost:8888
        redir /pt https://xx.cciz.cc:8089 301
        redir /bt https://xx.cciz.cc:8082 301
}
https://xx.cciz.cc:8082
{
	root * /var/www/aria2
	file_server
}
https://xx.cciz.cc:8089
{
	reverse_proxy * localhost:9091
}
```