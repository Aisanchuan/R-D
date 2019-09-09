# 第04节：其他新特性

### 一、promise的概述
Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES2015+ 将其写进了语言标准，统一了用法，原生提供了Promise对象。

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
#### 基本语法

Promise是ES2015新增加的一个类，我们可以使用new Promise创建一个promise对象。通过promise我们可以让异步的代码更像是同步的代码。我们先看看promise的基本语法：

``` js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

上面是一段伪代码，并不能正常运行，但是通过上面的代码可以看到，如果异步程序正确地执行，将会调用resolve,如果不能正确执行，将调用reject,我们结合实际的案例来看看promise的应用。


#### 实际应用

我们仍然是编写一个person的对象，person有两个属性分别是firstName和age，person有两个方法分别是sayName和sayAge分别会输出自己的名字和年两，但是输出的过程中我们使用延时的方式输出
示例代码如下:[代码案例](https://github.com/xiaozhoulee/xiaozhou-examples/blob/master/04-ES2015%2B/第04节：ES2015（四）/demo02.html)

``` js
var person = {
    firstName: "小明",
    age: 10,
    sayName() {
        setTimeout(() => {
            console.log(this.firstName)
        }, 3000)
    },
    sayAge() {
        setTimeout(() => {
            console.log(this.age)
        }, 2000)
    }
}
person.sayName();
person.sayAge();
```

上面是一段最简单的异步代码，sayName会延时3秒，sayAge会延时两秒，虽然我们先调用了sayName但是因为延时的关系，我们先得到的是age属性，那么在实际开发当中，我们经常会遇到这种异步编程的问题，那么如何实现先输出name，后输出age呢，我们可以用promise来实现这个功能，
代码如下所示:[代码案例](https://github.com/xiaozhoulee/xiaozhou-examples/blob/master/04-ES2015%2B/第04节：ES2015（四）/demo03.html)

``` js
var person = {
    firstName: "小明",
    age: 10,
    sayName() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(this.firstName)
                resolve();
            }, 3000)
        })
    },
    sayAge() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(this.age)
                resolve();
            }, 2000)
        })
    }
}


person.sayName().then(() => {
    person.sayAge();
});
```

我们让sayName和sayAge两个方法都返回一个promise对象，这样在调用sayName之后就可以使用promise的then方法再次调用sayAge,这样当sayName成功执行之后才会执行sayAge，异步的程序就像同步的程序一样，按照我们希望的顺序执行了。


### 二、Symbol概述
ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES2015+ 引入Symbol的原因。

ES2015+ 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
示例代码如下:
``` js
let s = Symbol();

typeof s
// "symbol"
```
上面代码中，变量s就是一个独一无二的值。typeof运算符的结果，表明变量s是 Symbol 数据类型，而不是字符串之类的其他类型。

作为属性名的 Symbol
由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
示例代码如下:

```js
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```
上面代码通过方括号结构和Object.defineProperty，将对象的属性名指定为一个 Symbol 值。

还有一点需要注意，Symbol 值作为属性名时，该属性还是公开属性，不是私有属性。

### 三、模块化概述
ES6的Class只是面向对象编程的语法糖，升级了ES5的构造函数的原型链继承的写法，并没有解决模块化问题。Module功能就是为了解决这个问题而提出的。

历史上，JavaScript一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比如Ruby的require、Python的import，甚至就连CSS都有@import， 但是JavaScript任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。

在ES6之前，社区制定了一些模块加载方案，最主要的有CommonJS和AMD两种。前者用于服务器，后者用于浏览器。ES6在语言规格的层面上，实现了模块功能，而且实现得相当简单，完全可以取代现有的CommonJS和AMD规范，成为浏览器和服务器通用的模块解决方案。

ES6模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS和AMD模块，都只能在运行时确定这些东西。比如，CommonJS模块就是对象，输入时必须查找对象属性。
示例代码如下:

``` js
// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat, exists = _fs.exists, readfile = _fs.readfile;
```
上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取3个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

ES6模块不是对象，而是通过export命令显式指定输出的代码，输入时也采用静态命令的形式。
示例代码如下:

``` js
// ES6模块
import { stat, exists, readFile } from 'fs';
```

上面代码的实质是从fs模块加载3个方法，其他方法不加载。这种加载称为“编译时加载”，即ES6可以在编译时就完成模块加载，效率要比CommonJS模块的加载方式高。当然，这也导致了没法引用ES6模块本身，因为它不是对象。

由于ES6模块是编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽JavaScript的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。

#### 模块的整体加载
除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

下面是一个circle.js文件，它输出两个方法area和circumference。

``` js
// circle.js

export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}
```
现在，加载这个模块。

``` js
// main.js

import { area, circumference } from './circle';

console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
```

上面写法是逐一指定要加载的方法，整体加载的写法如下。

``` js
import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

```