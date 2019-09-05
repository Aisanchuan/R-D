# 第02节：npm常用命令

### 一、安装NPM包

有两种方法安装npm包：本地安装和全局安装，使用哪种安装方式，取决于我们用NPM包做什么

* 如果包作为项目的依赖，需要被引入到项目当中，需要本地安装。
* 如果需要包提供一个命令行工具，则需要全局安装。

#### 本地安装

我们先打开windows命令行工具，进入到需要安装npm包的目录，例如D:/test目录，然后执行下面命令

``` bash
npm install vue
```

效果如下图所示：

![本地安装示意图](/images/local.png)

安装完成之后，NPM会在D:/test目录下创建一个node_modules的目录，然后将所有NPM包下载到这个目录之下。上面的例子我们下载的是vue，所以打开node_modules会看到一个vue的目录，这就是vue的npm包。

我们可以在test目录下创建js文件，通过require函数引入vue。这部分内容会在下一章深入讲解。

### 全局安装vue依赖

如果我们希望获得NPM包提供的命令，则需要全局安装，全局安装需要在命令中添加-g，示例代码如下所示：

``` bash
npm install -g http-server
```

下载完成之后，http-server包不会像本地安装那样下载到当前目录下，而是会下载到系统目录中，win10系统下载目录如下所示：

> C:\Users\Administrator\AppData\Roaming\npm\node_modules

我们不必去打开这个目录去浏览下载的文件，只要知道如何使用NPM包的命令即可。

例如我们使用钢材下载的http-server包开启一个静态文件目录服务器，步骤如下：

1. 选择开启服务器的目录，这里选择D:/test/server目录。
2. 在这个目录中执行http-server命令，默认端口为8080。
3. 在server目录中创建一个index.html文件。
4. 打开浏览器，访问http://127.0.0.1:8080，可以看到index.html文件的内容。

以上展示了全局安装http-server包，并通过http-server命令开启一个静态文件目录服务器。后续我们会安装贡多的npm全局命令。

### 二、项目初始化

#### 初始化命令

``` bash
npm init
```

#### package.josn文件

* 创建项目npm init
* 文件说明
* 根据文件中的依赖关系安装依赖包
