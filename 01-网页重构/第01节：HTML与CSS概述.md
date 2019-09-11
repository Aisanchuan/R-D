# 第01节：HTML与CSS概述

### 一、网页重构

学习前端开发第一步要做的就是网页重构，简单的说就是制作网页。

在实际项目中，网页的设计稿由公司的UI设计师完成。前端工程师接到设计稿之后，使用HTML，CSS等技术，将设计稿变成真正的网页，这个过程就叫做网页重构。

### 二、HTML概述

HTML的全称是【超文本标记语言】，这个名字不重要，重要的是要知道，这门语言并不是编程语言，而是一个标记语言，也就是说他的代码是由一个个标签组成的，如下所示：[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第01节：HTML与CSS概述/demo01.html)

``` html
<!-- demo01.html -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title> 
</head>
<body>
	<p>我的第一个网页</p>
</body>
</html>
```

HTML主要控制网页的内容，例如可以在网页中设置文本，图片，列表等内容。

不同的标签具有不同的含义，HTML有上百个标签，有些是不常用的，有些甚至已经被废弃。很多初学者都会困惑，不知道自己到底要学习哪些标签。庆幸的是有了这本《前端开发学习手册》，只要掌握十几个标签，就能完成生动的网页。

在下一节我们会列举常用的HTML标签。

### 三、CSS概述

CSS全称【层叠样式表】。刚才我们了解了，使用HTML可以设置网页中的内容，那么使用CSS就可以进一步装饰这些内容，录入设置文本的字体颜色，或是改变图片的尺寸等等。如下面的代码所示，CSS的代码实在style标签内部编写的。
[示例代码](https://github.com/xiaozhoulee/xiaozhou-examples/tree/master/01-网页重构/第01节：HTML与CSS概述/demo02.html)
``` html
<!-- demo02.html -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		p{
			color:red;
		}
	</style>
</head>
<body>
	<p>我的第一个网页</p>
</body>
</html>
```

上面的代码我们可以将p标签的文字设置成红色。

关于CSS的更多内容，我们会在后续章节继续讨论。

### 四、练习

上节我们简单地概括了什么是HTML和CSS，接下来大家可以在vscode中编写上面的两个例子，步骤如下：

1. 打开vscode
2. 点击菜单 File => New File 创建文件。
3. 点击菜单 Save 保存成后缀为html的文件，例如index.html
4. 在文件中输入一个英文的感叹号（!），然后按tab键，就可以生成一个HTML文件的模板了。
5. 接下来按照上面的代码示例编写自己的网页。
6. 如果已经安装了open in browser插件，可以在html文件之上点击右键，然后选择open in default browser。用默认浏览器打开。

通过上面的六步，我们就可以访问我们自己的第一个网页了。


