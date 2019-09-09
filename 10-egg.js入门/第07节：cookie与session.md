# 第07节：cookie与session

### 一、cookie的基本概念

* cookie 是存储于访问者的计算机中的变量。可以让我们用同一个浏览器访问同一个域名的时候共享数据，实现数据的持久化。
* HTTP 是无状态协议。简单地说，当你浏览了一个页面，然后转到同一个网站的另一个页面，服务器无法认识到这是同一个浏览器在访问同一个网站。每一次的访问，都是没有任何关系的。
* cookie可以设置多个。

### 二、cookie在项目中的应用

#### 通过cookie记录访问次数

``let count = ctx.cookies.get('count');``

设置 Cookie 其实是通过在 HTTP 响应中设置 set-cookie 头完成的，每一个 set-cookie 都会让浏览器在 Cookie 中存一个键值对。在设置 Cookie 值的同时，协议还支持许多参数来配置这个 Cookie 的传输、存储和权限。

具体看：[案例]()

#### 基于cookie实现记录用户登录状态



### 三、session的基本概念

* session 是另一种记录客户状态的机制，session基于cookie，
不同的是 Cookie 保存在客户端浏览器中，而session 保存在服
务器上，相对于cookie，session更安全。


#### 通过session记录访问次数



#### 基于session实现记录用户登录状态




[更多详情请看](https://eggjs.org/zh-cn/core/cookie-and-session.html)