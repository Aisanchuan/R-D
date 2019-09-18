
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

Vue项目
``` js
//api.js
import axios from 'axios'
import config from './config.js'

class API {
  // POST
  post(params) {
    config.data = params.data
    return axios.post(params.url,config.data,config)
  }
  // 此处可以封装其他方法
}

export default API
```

Egg项目
``` js
//config.js
export default {
  method: 'post',
  // 基础url前缀
  baseURL: 'your request url',
  // 请求头信息
  headers: {
    'Content-Type':'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
}
getBrandsByHot:function () {
  let params = {
    url:'/company/list',
    data:{
      cond:{},
      limit:9,
      order_word: "attention_rate",
      order_direction: -1,
      page:1
    }
  }
  api.post(params).then(response => {
    this.hot_brand = response.data
  }).catch({});
}
```

#### 异常处理

由于IE9不支持Promise，因此需要在项目入口main.js中打个补丁,否则无法发出请求

``` s
import 'babel-polyfill'
```

如上，已经能在IE9+上发起网络请求，但是IE9上有个问题：response.data为undefined,因此需要对返回的数据针对不同浏览器进行处理，在API.js中加入如下拦截器

```js
// 响应拦截
axios.interceptors.response.use(function (response) {
  var data
  // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
  if(response.data == undefined){
    data = response.request.responseText
  } else{
    data = response.data
  }
  // 判断data不是Object时，解析成Object
  if(!(data instanceof Object)){
    data = JSON.parse(data)
  }
  return data
}, function (error) {
  return Promise.reject(error)
});
```


#### 进阶使用

结合promise 统一请求进一步封装成vue插件 可实现登录、拦截、登出等功能，以及利用axios的http拦截器拦截请求和响应

``` js
//api.js
export default function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: SERVER_BASE_URL,
      headers: {},
      transformResponse: [function (data) {
      }]
    })
    instance.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return Promise.reject(err)
      })

    instance.interceptors.response.use(
      response => {
        return response
      },
      error => {
        return Promise.reject({code:1000}) // 返回接口返回的错误信息
      })

    //请求处理
    instance(options)
      .then((res) => {
        resolve(res.data)
        return false
      })
      .catch((error) => {
         reject(error)
      })
  })
}
```


然后我们可以吧请求放到一个文件统一维护（相同的请求再也不用写多次了）
``` js
//interface.js
const IS_GUEST = params => {
  return fetch({
    url: '/sys/role/getRoleIdByUserId',
    method: 'get',
    params: params
  })
}

const RESET_PASSWORD = params => {
  return fetch({
    url: '/person/resetPswByMobile',
    method: 'get',
    params: params
  })
}

export default apiList={
    IS_GUEST,
    RESET_PASSWORD
}
```

再来把封装的axio作为vue的插件使用
``` js
//index.js
//导入模块
import apiList from './interface'

const install = function(Vue) {
    if (install.installed) return
    install.installed = true
    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return apiList
            }
        }
    })
}

export default {
    install
}
```


接下来我们vue中可以这样使用axios

``` js
//main.js先注册插件
import api from './index'
Vue.use(api)
```


然后可以在任何文件愉快的使用起来 就像这样
``` js
this.$api.RESET_PASSWORD().then(res=>{
    // ...
})
```