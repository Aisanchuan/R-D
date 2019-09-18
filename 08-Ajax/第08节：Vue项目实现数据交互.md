
# 第08节：Vue项目中实现数据交互

### 一、安装axios

### 二、直接使用axios请求数据

### 三、封装request方法

### 三、在vue项目中使用axios

#### 第一步安装
Vue项目中使用如下命令安装
```
npm install axios --save
```

#### 配置文件

在要引用axios的页面引用
``` js
import axios from 'axios'
```

调用axios
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