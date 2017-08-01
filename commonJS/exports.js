// Node应用由模块组成，采用CommonJS模块规范。
// 根据这个规范，每个文件就是一个模块，有自己的作用域。
// CommonJS规范加载模块是同步的，只有加载完成，才能执行后面的操作，AMD规范则是非同步加载模块，允许指定回调函数
// 由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，CommonJS规范比较适用
// 但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范

// 1.变量私有
// 在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。
// 下面代码中，变量x和函数addTen，是当前文件demo1.js私有的，其他文件不可见。
var x = 5;
var addTen = function (value) {
  return value + 10;
};

// 2.变量全局共享
// 如果想在多个文件分享变量，必须定义为global对象的属性。
// 下面代码的warning变量，可以被所有文件读取。当然，这样写法是不推荐的。
global.warning = true;

// 3.模块变量共享
// CommonJS规范规定，每个模块内部，module变量代表当前模块。
// 这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。
// 加载某个模块，其实是加载该模块的module.exports属性。
module.exports.x = x;
module.exports.addTen = addTen;

// module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量
// 为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令:
// var exports = module.exports;
// 造成的结果是，在对外输出模块接口时，可以向exports对象添加方法。

exports.area = function (r) {
  return Math.PI * r * r;
};

exports.circumference = function (r) {
  return 2 * Math.PI * r;
};

// exports 指向的是 module.exports，因此不能去直接修改exports这个值，这样exports会被覆盖，会切断与module.exports的关系
// exports = function(x) {console.log(x);}; 这样做是不合适的非法的，这样exports就没有意义了
// module.exports = 'Hello world'; 这样使用和上面也是一样的，这样也是不可行的，这样exports属性会被直接覆盖

// 如果你觉得exports与module.exports之间的区别很难分清
// 一个简单的处理方法，只使用 module.exports。
