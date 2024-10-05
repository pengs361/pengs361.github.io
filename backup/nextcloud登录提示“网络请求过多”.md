测试了两种办法
1）修改nextcloud配置文件
    登录你的nextcloud服务器
    进入nextcloud根目录
    找到config目录
    修改config.php文件,如果存在这个属性，就把值改为false；如果不存在，就增加下面这行配置

'auth.bruteforce.protection.enabled'=>false,

    保存
==========================以上办法无效===========================
2）清空数据表

数据库里清除防暴的表：oc_bruteforce_attempts

    mysql -u root -p
    use nextcloud
    delete from oc_bruteforce_attempts;

摘自
http://www.xinyigirl.com/pkm/nextcloud/218.html
https://wuming.me/post/15/