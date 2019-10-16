# 第八章：Ajax

### Ajax的基本概念
Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

Ajax的全称是Asynchronous JavaScript and XML，即异步JavaScript+XML。它并不是新的编程语言，而是几种原有技术的结合体。它由以下几种技术组合而成，包括：

* HTML/XHTML——主要的内容表示语言。
* CSS——为XHTML提供文本格式定义。
* DOM——对已载入的页面进行动态更新。
* XML——数据交换格式。
* XSLT——将XML转换为XHTML（用CSS修饰样式）。
* XMLHttp——用XMLHttpRequest来和服务器进行异步通信，是主要的通信代理。
* JavaScript——用来编写Ajax引擎的脚本语言。   
  
实际上，在Ajax解决方案中这些技术都是可用的，不过只有三种是必须的：HTML/XHTML、DOM以及JavaScript。

### 学习目标

* 熟练掌握HTTP协议的基本概念
* 使用axios实现基本的前后台数据交互
* 熟练掌握同步与异步的基本概念
* 熟练掌握promise对象
* 熟练使用async函数
* 在Vue项目中使用ajax
  
**注意：在本章的学习中，所有的访问网页都需要用ip地址访问，不可以双击打开网页**