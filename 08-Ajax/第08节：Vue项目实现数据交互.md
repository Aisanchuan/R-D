
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
axios({
        method: 'post',
        url:'http://easy-mock.com/mock/596077559adc231f357bcdfb/axios/test-post-axios'
      })
      .then((response)=>{
          console.log(response.data)
      })
      .catch((error)=>{
          console.log(error)
      })
```