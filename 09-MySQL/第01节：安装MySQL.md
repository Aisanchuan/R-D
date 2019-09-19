# 第01节:安装MySQL
### 一、下载MySQL8.0.17安装包

* 注意：在配置my.ini文件时，要修改里面的  mysql的安装目录和mysql数据库的数据的存放目录  需要改成自己所安装的目录

→[安装包在这里](https://dev.mysql.com/downloads/file/?id=487686)

![点击画圈的地方直接安装](../images/9-1-1-8.jpg)

### 二、解压安装包到目录

* 把安装包解压到D:\mysql-8.0.17-winx64，解压出来后打开文件夹，会有以下的文件，自动生成的，其中data文件还有my文件是后续添加的，下面会有方法

![示例图片](../images/9-1-1-1.png)

### 三、配置环境变量

####为什么要配置环境变量

1、计算机在执行命令的时候是在环境变量找对应的命令的位置的。如果不正确设置环境变量就不能正确使用相应的命令

2、比如说你要执行 sql 命令，你不设置环境变量path包括你的jdk安装路径，那系统去哪找你的sql.exe文件。

3、如果执行某个命令，系统无法在当前文件夹里找到对应的.exe，那么系统就会去path包含的路径找挨个找看是否能知道对应的.exe，一旦找到第一个对应的.exe就运行命令，其他的路径下就不找了。如果找不到你就会看到“系统找不到某某命令”的提示。

其他的环境变量也一样的用途，只不过是用来存储一些信息用的，这些信息可以被系统使用，也可以被你的应用程序使用

#### 方法

* 用右键点击我的电脑→属性→高级系统设置→环境变量

* 你点击红色区域,也就是在系统变量里找到PATH，然后双击进去

![示例图片](../images/9-1-1-2.png)

* 点击“编辑”，添加MySQL的bin文件夹的地址

![示例图片](../images/9-1-1-3.png)

#### 配置文件
1、使用配置文件，可以在不重新编译程序的情况下，通过修改配置文件，改变程序中用到的一些资源。如程序运行时用到的外部文件的路径、数据库连接字串和一些常量文本等。譬如在本地开发了一个应用，需要访问文件C:/temp/abc.txt，在另外一部电脑上使用时，不需要重新编译，也不需要提供源代码，修改写在配置文件中的文件路径，就可以不受路径变化的影响。

* 在MySQL文件夹D:\mysql-8.0.17-winx64中新建一个my.ini文件，写入如下信息：

```h

[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录
basedir=D:\\mysql-8.0.17-winx64 # 切记此处一定要用双斜杠\\，单斜杠我这里会出错，不过看别人的教程，有的是单斜杠。自己尝试吧
# 设置mysql数据库的数据的存放目录
datadir=D:\\mysql-8.0.17-winx64\\Data # 此处同上
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
# 服务端使用的字符集默认为UTF8
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
default_authentication_plugin=mysql_native_password
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8
```

#### 安装MySQL

* 以管理员的身份打开cmd，转到MySQL安装路径，输入如下命令初始化数据库：

```sql

mysqld --initialize --console
```

![示例图片](../images/9-1-1-5.png)

注意！执行输出结果里面有一段：

[Note] [MY-010454] [Server] A temporary password is generated for root@localhost: zyNrYHh2yF-E

其中root@localhost:后面的“zyNrYHh2yF-E”就是初始密码（不含首位空格）。在没有更改密码前，需要记住这个密码，后续登录需要用到。


要是关快了，或者没记住，那也没事，删掉初始化的 data 目录，再执行一遍初始化命令，又会重新生成的。当然，也可以使用安全工具，强制改密码，用什么方法，自己随意。

#### 安装服务

在MySQL的安装目录D:\mysql-8.0.17-winx64\bin中输入

```sql
mysqld --install
```

安装成功会有如下代码

```sql
D:\mysql-8.0.17-winx64\bin>mysqld --install
Service successfully installed
```

原命令应为：

```sql
mysqld --install [服务名]
```

但后面的服务名可以不写，默认的名字为 mysql。当然，如果你的电脑上需要安装多个MySQL服务，就可以用不同的名字区分了，比如 mysql5 和 mysql8。

#### 启动MySQL服务

* 启动MySQL：

```sql
net start mysql
```

【通过命令net stop mysql停止服务。通过命令sc delete MySQL/mysqld -remove卸载 MySQL 服务】

### 八、更改密码

用管理员身份打开cmd然后输入

```sql
mysql -u root -p
```

* 输入之前 的密码就可以进入MySQL了。

![示例图片](../images/9-1-1-6.png)

* 在MySQL中执行命令：

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';
```

* 修改密码，注意命令尾的“分号”，一定要有，这是mysql的语法

![示例图片](../images/9-1-1-7.png)




安装成功