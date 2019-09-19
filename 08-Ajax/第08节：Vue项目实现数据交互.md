
# 第08节：Vue项目中实现数据交互

### 一、安装axios

Vue项目中使用如下命令安装

``` 
npm install axios --save
```

在要引用axios的页面引用
``` js
import axios from 'axios'
```

### 二、直接使用axios请求数据


发送GET请求

``` js
// created:vue生命周期中的钩子函数，在这个时间点，data中的数据已经注入到响应式系统中
created(){
    axios.get('api/getData.php',{       // 还可以直接把参数拼接在url后边
        params:{
            title:'眼镜'
        }
    }).then(function(res){
        this.goodsList = res.data;//response.data才是真正返回的后台数据
    }).catch(function (error) {
        console.log(error);
    });
}
```

发送post请求

``` js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});

// 注意: 如果发送请求时，发现传递的参数是对象，那么可用如下方式传参数
// var params = new URLSearchParams();
// params.append('title', '眼镜');
// params.append('id',1);
// axios.post('/user', params)
//      .then(function(res){})
//      .catch(function(error){});
```

``` js
//使用post请求数据
axios({
        method: 'post',
        url:'要请求数据的url'
      })
      .then((response)=>{
          console.log(response.data)
      })
      .catch((error)=>{
          console.log(error)
      })
```


``` js
//get方式发送数据
            axios.get('https://easy-mock.com/mock/5a883cccbf160328124e8204/example/mock', {
                params: {
                    pomelo: 'tt',
                    test: 'test'
                }
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
```

``` js
//post方式发送数据
           axios.post('https://easy-mock.com/mock/5a883cccbf160328124e8204/example/mock', {
                pomelo: 'tt',
                test: 'test'
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })

```
### 三、封装request方法

### 三、在vue项目中使用axios

#### 第一步安装

#### 配置文件


调用axios