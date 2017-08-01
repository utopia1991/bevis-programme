# function
# 不需要return，在 coffee 中隐式的返回每个函数的最后一个表达式的值
# function使用'->'或者'=>'来表示，'=>'代表的函数具有块级作用域
# 使用有效的缩进（经常一个tab）来分割函数块和所有的条件分支（代替了 JS 中的'{}'）
# 不需要声明，coffee直接通过传值得与否自动声明，不需要 ";" 来结束语句

# coffee
square = (x) =>
  x*x

cube = (x) =>
  square(x)*x

a1 = cube(3)

# js
# var cube, square;

# square = function(x) {
#   return x * x;
# };

# cube = function(x) {
#   return square(x) * x;
# };

console.log "I am #{a1} years old." # coffee 的 console.log 使用 "" 来表示最好

# array 和 object

# coffee
song = ["do", "re", "mi", "fa", "so"]

singers = {Jagger: "Rock", Elvis: "Roll"}

bitlist = [
  1, 0, 1
  0, 0, 1
  1, 1, 0
]

kids =
  brother:
    name: "Max"
    age:  11
  sister:
    name: "Ida"
    age:  9

# js
# var bitlist, kids, singers, song;
#
# song = ["do", "re", "mi", "fa", "so"];
#
# singers = {
#   Jagger: "Rock",
#   Elvis: "Roll"
# };
#
# bitlist = [1, 0, 1, 0, 0, 1, 1, 1, 0];
#
# kids = {
#   brother: {
#     name: "Max",
#     age: 11
#   },
#   sister: {
#     name: "Ida",
#     age: 9
#   }
# };
console.log 'aaaa1', song
console.log 'aaaa2', singers
console.log 'aaaa3', bitlist
console.log 'aaaa4', kids

# combile with jQuery
$('#app').addClass "active"

# conditional assignment
# coffee
singing = true
greatlyImproved = ['happy', 'good']
mood = greatlyImproved if singing

# js
# if (singing) {
#   mood = greatlyImproved;
# }

console.log 'mood', mood

# coffee
date = if friday then sue else jill

# js
# data = friday ? sue : jill;

# coffee
if happy and knowsIt
  clapsHands()
  chaChaCha()
else
  showIt()

# js
# if (happy && knowsIt) {
#   clapsHands();
#   chaChaCha();
# } else {
#   showIt();
# }
