# 第06节：发布vue项目

### 一、项目打包
 1、首先第一肯定是要有Node.js及npm这个不多说了  
 2、在项目的根目录下运行命令行输入npm run build 给项目打包  
 3、使用npm run build进行打包，这个时候你直接打开dist/下的index.html,会发现文件可以打开，但是所有的js，css，img等路径有问题是指向根目录的（打开了但是没有内容），此时需要修改config/index.js里的assetsPublicPath的字段，初始项目是/他是指向项目根目录的，这时改为 ./ 就可以正常运行了
![indeximg](../../images/0706_indimg.png)
### 二、项目配置
github pages  
#### 1、在github创建一个仓库  
![create](../../images/0706_create.jpg)
#### 2、将之前打包好的项目上传到gitck  
![gitck](../../images/0706_gitck.png)
#### 3、点击设置然后往下拉会看到自己的域名  
![sz](../../images/0706_sz.png)
![wz](../../images/0706_wz.png)
#### 4、打开网址就可以看到自己的项目了  
![vue](../../images/0706_vue.png)
