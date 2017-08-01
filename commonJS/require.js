// require方法用于加载模块。
// require命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。
// require命令用于加载文件，后缀名默认为.js

var example = require('./exports');

console.log(example.x); // 5
console.log(example.addTen(11)); // 21
console.log('exports: ', example);
// exports:  {
//   x: 5,
//   addTen: [Function: addTen],
//   area: [Function],
//   circumference: [Function]
// }

// 加载规则:
// 根据参数的不同格式，require命令去不同路径寻找模块文件。
// （1）如果参数字符串以“/”开头，则表示加载的是一个位于绝对路径的模块文件。
// 比如，require('/home/marco/foo.js')将加载/home/marco/foo.js。
// （2）如果参数字符串以“./”开头，则表示加载的是一个位于相对路径（跟当前执行脚本的位置相比）的模块文件。
// 比如，require('./circle')将加载当前脚本同一目录的circle.js。
// （3）如果参数字符串不以“./“或”/“开头，则表示加载的是一个默认提供的核心模块（位于Node的系统安装目录中），
// 或者一个位于各级node_modules目录的已安装模块（全局安装或局部安装）。
// 举例来说，脚本/home/user/projects/foo.js执行了require('bar.js')命令，Node会依次搜索以下文件。
// /usr/local/lib/node/bar.js
// /home/user/projects/node_modules/bar.js
// /home/user/node_modules/bar.js
// /home/node_modules/bar.js
// /node_modules/bar.js
// 这样设计的目的是，使得不同的模块可以将所依赖的模块本地化。
// （4）如果参数字符串不以“./“或”/“开头，而且是一个路径，比如require('example-module/path/to/file')，
// 则将先找到example-module的位置，然后再以它为参数，找到后续路径。
// （5）如果指定的模块文件没有发现，Node会尝试为文件名添加.js、.json、.node后，再去搜索。
// .js件会以文本格式的JavaScript脚本文件解析，.json文件会以JSON格式的文本文件解析，.node文件会以编译后的二进制文件解析。
// （6）如果想得到require命令加载的确切文件名，使用require.resolve()方法。

// 模块的缓存
// 第一次加载某个模块时，Node会缓存该模块。以后再加载该模块，就直接从缓存取出该模块的module.exports属性。
// require('./example.js');
// require('./example.js').message = "hello";
// require('./example.js').message
// "hello"
// 上面代码中，连续三次使用require命令，加载同一个模块。第二次加载的时候，为输出的对象添加了一个message属性。
// 但是第三次加载的时候，这个message属性依然存在，这就证明require命令并没有重新加载模块文件，而是输出了缓存。
// 如果想要多次执行某个模块，可以让该模块输出一个函数，然后每次require这个模块的时候，重新执行一下输出的函数。
// 所有缓存的模块保存在require.cache之中，如果想删除模块的缓存，可以像下面这样写。
// 删除指定模块的缓存
// delete require.cache[moduleName];
// 删除所有模块的缓存
// Object.keys(require.cache).forEach(function(key) {
//   delete require.cache[key];
// })
// 注意，缓存是根据绝对路径识别模块的，如果同样的模块名，但是保存在不同的路径，require命令还是会重新加载该模块。
