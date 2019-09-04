## 第07节：模态框（实践课）

### 一、案例目标

* 制作一个弹出框
* 当点击按钮的时候，弹出框显示，且弹出框显示的时候不能点击显示按钮
* 弹出框有一个关闭按钮，当点击关闭时，弹出框消失。


### 二、思路解析

* 弹出框的容器应该绝对定位，占用整个页面，且半透明。
* 弹出框内容设置在页面中间显示。
* 弹出框初始样式设置display:none，单击显示按钮时，将弹出框display属性设置成block。
* 点击关闭按钮，弹出框display属性设置为none。


### 三、开发过程

* 首先要完成样式和布局，代码如下所示。[index.html](https://github.com/xiaozhoulee/xiaozhou-examples/blob/master/03-jQuery/%E7%AC%AC07%E8%8A%82%EF%BC%9A%E6%A8%A1%E6%80%81%E6%A1%86/index..html)

``` html
<button class="show">弹出模态框</button>
<div class="model">
    <div class="bg"></div>
    <div class="content">
        <button class="hide">关闭模态框</button>
        <h1>模态框的内容</h1>
    </div>
</div>
``` 

``` css
*{
    margin:0px;
    padding:0px;
}

/* 设置模态框容器 */
.model{
    position: absolute;
    top:0px;
    left:0px;
    height:100%;
    width:100%;
    display: none;
}

/* 设置半透明层 */
.model .bg{
    position: absolute;
    height:100%;
    width:100%;
    background-color: rgba(0,0,0,0.3)
}

/* 设置居中显示的模态框内容 */
.model .content{
    width:300px;
    height:200px;
    position: absolute;
    top: 30%;
    left:50%;
    transform: translateX(-50%);
    border:1px solid red;
}
```

* 两个按钮的事件

``` js
$(".show").click(function(){
    $(".model").fadeIn();
})

$(".hide").click(function(){
    $(".model").fadeOut();
})
```