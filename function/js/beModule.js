// 做为命名空间的函数，这是一个自调用匿名函数
// 通过定义一个匿名函数，创建了一个“私有”的命名空间，该命名空间的变量和方法，不会破坏全局的命名空间
// (function(){
//
// }());
// 或者，这两种方法都可以
// (function(){}())是使用了强制运算符执行函数调用运算，(function(){})()是通过函数调用运算符操作函数引用
// 两者功能上是一致的，只是运算过程不同。
// (function(){
//
// })();

var Be = (function(){
	var _count = 5;
	var add = function(x,y){
		return x+y;
	};
	var subtract = function(x,y){
		return x-y;
	};
	var multipl = function(x,y){
		return x*y;
	};
	var divide = function(x,y){
		return x/y;
	};
	var pow = Math.pow; // 指数表达式
	return {
		add : add,
		subtract : subtract,
		multipl : multipl,
		divide : divide,
		pow : pow,
	};
})();
