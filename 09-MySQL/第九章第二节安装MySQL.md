# 第九章第二节安装MySQL

### 安装MySQL
####一、下载MySQL安装包
[安装包](https://dev.mysql.com/downloads/windows/installer/8.0.html)
* 下载393.4M的
[安装教程](https://www.cnblogs.com/ZengJiaLin/p/11332561.html)

####二、数据库数据的备份与恢复
1.备份数据库的内容：
数据库名叫dddd
```sql
mysqldump -u root -p `dddd` > dddd.sql
```
回车后，输入密码
```sql
Enter password: ******
```
现在当前目录下，有个dddd.sql文件
导出到当前目录

数据库名叫做army
导出数据库
```sql
mysqldump -u root -p army > d:/database_dump.txt
```
D盘有一个database_dump.txt文件
这个是导出到不同级目录

* 恢复数据的话，需要先创建一个数据库例如创建的数据库叫SQL

* 恢复数据
```sql
mysql -u root -p SQL < dddd.sql
```
这是把当前目录下的文件夹dddd.sql文件的内容导入进SQL数据库内

* 恢复数据：
```sql
mysql -u root -p armytest < d:/database_dump.txt
```
这是把不同目录下的文件database_dump.txt里面的内容导入到SQL数据库里

3.
数据库：db_name 
数据表：table_name 
用户名：root 
密码：dbpasswd

* 导出数据库表结构：
```sql
mysqldump -uroot -pdbpasswd -d db_name >db.sql;
```

* 导出数据库中某个表的表结构：
```sql
mysqldump -uroot -pdbpasswd -d db_name table_name >db.sql;
```
* 导出数据库的表结构和表数据：
```sql
mysqldump -uroot -pdbpasswd db_name >db.sql;
```
* 导出数据库中某个表的表结构和表数据：
mysqldump -uroot -pdbpasswd db_name table_name >db.sql;

【mysqldump -u root -p】是导出数据固定的代码
【mysql -u root -p】是导入数据固定的代码
