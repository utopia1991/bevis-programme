// Node内部提供一个Module构建函数。所有模块都是Module的实例。

// 每个模块内部，都有一个module对象，代表当前模块。它有以下属性。
// module.id 模块的识别符，通常是带有绝对路径的模块文件名。
// module.filename 模块的文件名，带有绝对路径。
// module.loaded 返回一个布尔值，表示模块是否已经完成加载。
// module.parent 返回一个对象，表示调用该模块的模块。
// module.children 返回一个数组，表示该模块要用到的其他模块。
// module.exports 表示模块对外输出的值。

// CommonJS模块的特点如下:
// 所有代码都运行在模块作用域，不会污染全局作用域。
// 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
// 模块加载的顺序，按照其在代码中出现的顺序。

// 模块的加载机制:
// CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。请看下面这个例子。
// 下面是一个模块文件lib.js。
// lib.js
// var counter = 3;
// function incCounter() {
//   counter++;
// }
// module.exports = {
//   counter: counter,
//   incCounter: incCounter,
// };
// 上面代码输出内部变量counter和改写这个变量的内部方法incCounter。
// 然后，加载上面的模块。
// main.js
// var counter = require('./lib').counter;
// var incCounter = require('./lib').incCounter;
// console.log(counter);  // 3
// incCounter();
// console.log(counter); // 3
// 上面代码说明，counter输出以后，lib.js模块内部的变化就影响不到counter了
