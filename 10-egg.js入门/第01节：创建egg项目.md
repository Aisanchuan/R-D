# 第01节：Egg概述与创建项目

### Egg.js 是什么?

``` 
Egg.js 为企业级框架和应用而生，我们希望由 Egg.js 孕育出更多上层框架，帮助开发团队和
开发人员降低开发和维护成本。
```

### 一、使用egg的目的

* 提供基于 Egg 定制上层框架的能力
* 高度可扩展的插件机制
* 内置多进程管理
* 基于 Koa 开发，性能优异
* 框架稳定，测试覆盖率高
* 渐进式开发

### 二、创建egg项目

对于刚接触的同学来说,可能会感觉很难，但创建一个项目是非常简单的，跟下面一步一步做吧！

1.创建egg的环境 
``npm i egg-init -g``(只需要安装一次)
2.创建项目  
如：``egg-init eggdemo01 --type=simple``
  方法 ：``egg-init 项目名称 --type=simple  ``
3.进入到这个文件夹
 ``cd+文件夹名``
4.安装依赖
 ``npm install``
5.启动项目
```
安装成功后直接执行npm run dev，默认端口是7001，然后在浏览器中打开localhost:7001如果出现如下图所示就说明初始化目成功了，如果安装依
赖失败那么可以强制npm清理一下缓存npm cache clean --force然后再安装，如果还是报错可以翻墙到面再试下。
```

### 三、项目目录结构讲解
**创建好项目的同学可以发现多了好多文件夹，具体用来干什么的呢，请看下面**
```
egg-project(项目名)
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── user.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```

``app/router.js`` 用于配置 URL 路由规则
``app/controller/`` 用于解析用户的输入，处理后返回相应的结果
``app/service/`` 用于编写业务逻辑层，可选，建议使用
``app/middleware``/ 用于编写中间件，可选
``app/public/`` 用于放置静态资源，可选
``app/extend/`` 用于框架的扩展，可选
``config/config.{env}.js`` 用于编写配置文件
``config/plugin.js`` 用于配置需要加载的插件
test/ 用于单元测试
``app.js`` 和 ``agent.js`` 用于自定义启动时的初始化工作，可选

``app/public/`` 用于放置静态资源，可选
``app/schedule/`` 用于定时任务，可选

``app/view/`` 用于放置模板文件，可选，由模板插件约定，
``app/model/`` 用于放置领域模型，可选，由领域类相关插件约定，如 ``egg-sequelize``。

详情可见 ：[Egg官网](https://eggjs.org/zh-cn/intro/quickstart.html)