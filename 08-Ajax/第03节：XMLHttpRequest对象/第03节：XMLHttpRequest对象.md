# 第03节：XMLHttpRequest对象

### 一、Ajax原理

上一节我们使用jQuery实现了异步交互数据，本节我们不依赖任何库和框架来实现异步数据交互。
``` html
<script>
        $("button").click(function(){//点击执行函数
            //输出data.txt中的数据，hello ajax
            $.ajax({
                type:"get",//请求方法
                url:"/data.txt"//请求路径
            }).done(function(res){
                alert(res)
            })

        })
</script>
```

### 二、封装一个Ajax方法

### 三、实际工作中的应用

在实际工作中，我们很少直接用到XMLHttpRequest对象。我们一直会用一些封装好的库或框架来实现异步数据交互，但是我们可以通过自己动手封装Ajax来进一步学习后续的内容。

* Promise对象
* async函数