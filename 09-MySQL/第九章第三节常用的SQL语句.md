# 第03节：常用的SQL语句

### SQL分类

* DDL:数据定义语言，可以用来曹组数据库对象：库，表，列等
* DML:数据操作语言，增删改数据
* DCL:数据控制语言，用来设置访问权限和安全级别
* DQL:数据查询语言，用来查询数据库中的数据

### 一、安装

* 下载zip文件
* 解压文件
* 环境变量：MYSQL_HOME:"mysql根目录"
* 生成data文件：mysqld --initialize-insecure --user=mysql
* 安装服务：mysqld -install
* 启动服务： net start mysql
* 链接数据库：mysql -u root -p
* 修改数据库密码：update mysql.user set authentication_string=password("123456") where user="root";
* 退出：quit

### 二、常用操作

1. 显示所有数据库：show databases;
2. 查看数据库详细信息：show create database db_name;
3. 将数据库修改为UTF8：alter database db_name character set utf8;
4. 切换数据库：use database_name;
5. 显示数据库所有表:show tables;
6. 创建数据库：CREATE DATABASE `db_name` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; //用反引号
7. 删除数据库：drop database db_name;
8. 删除表：drop table table_name;
9. 查看表结构：desc table_name;
### 数据类型
* int:
* double:
* char:固定长度
* varchar:可变长度
* text:大文本内容，博客存储文章
* blob:
* date:
* time:
* titmestamp:
* datatime:

### 可视化软件

* mysql workbench

### 语句

``` sql
--DDL
create table student(id int,name varchar(20),sex char(1));  --创建表
alter table student add achievement int;  --为student表添加字段
alter table student modify sex char(2) --修改表字段类型或尺寸
alter table student drop achievement;  --删除表中的列
rename table student to person; --修改表明
alter table person character set gbk; --修改表的编码
show create table user; --查看表创建信息
alter table user change name username varchar(20); --修改字段名称
--DML
insert into user (id,name,sex) values (1,"小明","男"); --插入一条数据
insert into user values (1,"小明","男"); --简写插入
insert into user (id,name,sex) values    --批量添加
(1,"小明","男"),
(2,"小明","男"),
(3,"小明","男");
update user set name = "xiaohong",sex = "女" where id = 1; --修改数据
delete from user where id = 1; --删除数据
delete from user;  --将表中数据全部删除
--DQL
-- select 字段名 from 表明 [where -> group by -> having -> order by]
select name from user; --查询用户名称
select name,sex from user; --查询姓名和性别
select * from user; --查询所有字段，存在性能问题，开发中不建议使用*
select name,age,sal*12 from user; --sal是月薪，乘以12可以查询年薪
select name,age,sal*12 as yearsal from user; --as可以给字段起别名
select name from user where id = 10;  --查询id为10
select name from user where sal > 1000; --查询薪水大于1000
select name from user where name = '小明'; --字符串需要用引号
select name from user where id != 10; --id不等于10
select name from user where id <> 10; --同上，建议使用此符号，id不等于10
select name from user where sal >= 1000 and sal <= 5000; --薪水在1000到5000之间
select name from user where sal between 1000 and 5000; --同上，薪水在1000到5000之间
select name from user where sal is null; --薪水为null
select name from user where sal <= 1000 or sal >= 5000; --薪水小宇1000或大于5000
select name from user where name in ('Lily','lucy','xiaoming');  --只要满足一个就可以，执行效率低，尽量避免使用
select name from user where name not in ('Lily','lucy','xiaoming');  --都不是就符合条件，执行效率低，尽量避免使用
select name from user where name like 'm%'; --模糊查询，以m开头，like性能较低
select name from user where name like '%m'; --模糊查询，以m结尾
select name from user where name like '%m%'; --查詢字母中間包括m的
select name from user where name like '_m%'; --查詢第二个字母是m的，一个下划线代表一个字符
select name from user order by sal; --默认为按sal升序排列
select name from where name like 'm' order by sal; --先写条件，再写排序
select name from where name like 'm' order by sal asc; --手动指定升序，与默认相同
select name from where name like 'm' order by sal desc; --手动指定降序排列
select name from user order by name,sal; --多字段排序，先按照name排序，再按照sal排序

```

### 函数

``` sql
select lower(name) from user; --查询员工姓名，并将信命转换成小写。
select upper(name) from user; --查询员工姓名，并将信命转换成大写。
select substr(name,2,1) from user; --查询姓名，截取字符串，只显示第二个字母
select name from user where substr(name,2,1) = 'A'; --查询姓名，显示第二个字母为a的
select name,length(name) as nameLength from user; --显示姓名长度
select name,ifnull(sal,0) from user; --如果sal的值为null，name替换成0。
select name,(sal + ifnull(comm,0)) as totalSal from emp; --（comm为津贴）查询总薪水
--case..when..then..else..end 相当于if判断
--trim 去掉空格
select name from user where name = trim('   test   '); --去掉空格，一般在java中就已经判断了，所以数据库用到的情况下不多
select round(sal,1) from user; --查看薪水，四舍五入保留一位小数，
select rand(); --生成一个0-1的随机数
select sum(sal) as sumSal from user; --获取薪水的合计。
select sum(sal + ifnull(comm,0)) as totalSal from user; --获取总薪水
select avg(sal) as avgSal from user; --获取薪水的平均数
select max(sal) as maxSal from user; --获取最高薪水
select min(sal) as minSal from user; --获取最低薪水
select count(*) from user; --获取数据的总数
select count(comm) from user; --count会忽略空值，可以获取comm(补助)不为空的数量
select distinct name from user; --去掉重复的name数据
select count(distinct job) from user; --查询工作岗位的数量
select job,max(sal) as maxJob from user group by job; --根据job进行分组，找出每组的最高薪水
```

### 存储引擎

``` sql
show engines; --显示所有存储引擎
--创建表的时候可以指定存储引擎，如果不指定就会使用默认的存储引擎
show create table user; --查看user表当前使用的存储引擎。
--不同存储引擎的特性不同
```
* MyISAM:节省存储空间，查询较多。
* InnoDB:支持事务，修改较多。
* MEMORY:数据存储在内存中，可以存储非永久保存的数据

### 事务transaction

* 事务可以保证多个任务的原子性，例如三个任务如果有一个没有完成，那么三个都不执行。
* 可以保证多个操作要么全部成功，要么全部失败。

事务的特征

* 原子性
* 一致性
* 隔离性
* 持久性

``` sql
start transaction;
--操作一
--操作二
rollback; --回滚，测校上面操作
commit; --提交，执行操作一和操作二
```

事务的隔离级别

* read committed 读未提交
* 读已提交
* repeatable read 重复度
* serializable 串行话

### 索引

提升数据库查询效率，表中每一个字段都可以添加索引，主键会自动添加索引，所以按照主键查询效率更高。

什么情况下添加索引

* 该字段数据量庞大
* 该字段很少的DML操作
* 该字段经常出现在where条件中

``` sql
--创建索引
--create index 索引名 on 表名(列明);
create index name_index on user(name);
--查看索引
show index from user;
--删除索引
drop index name_index on user;
```

### 视图

视图就是一个查询结果，可以隐藏表中的细节。

``` sql
--创建视图
--create view 视图名称 as 查询语句;
create view user_view as select name,age,sex from user;
--查询视图
select * from user_view;
--修改视图
alter view user_view as select name,age from user;
--删除视图
drop view user_view if exists user_view;
```