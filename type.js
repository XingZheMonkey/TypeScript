"use strict";
exports.__esModule = true;
// 1.字符串类型
var str = "i am a string";
// 2.布尔类型
var isTrue = false;
// 3.数组类型
var list = [1, 2, 3, 4];
// 4.元组类型
var arr = ["test", 1];
console.log("元组类型 " + arr[0]);
// 5.枚举类型
var weeks;
(function (weeks) {
    weeks[weeks["Mon"] = 0] = "Mon";
    weeks[weeks["Tue"] = 1] = "Tue";
    weeks[weeks["Wed"] = 2] = "Wed";
})(weeks || (weeks = {}));
var day = weeks.Mon;
console.log("枚举类型 day=" + day);
console.log("枚举类型 weeks[0]=" + weeks[0]);
console.log("枚举类型 weeks['Mon']=" + weeks["Mon"]);
// 6.任意类型
var value;
value = "test";
console.log("any类型 " + value);
value = 5;
console.log("any类型 " + value);
// 7.空类型
function fn() {
    console.log("我是void类型，无返回值 ");
}
fn();
// 7.联合类型
var x; // x 可为三种类型中的一个
// 8.类型断言
var y = "this is a string";
var strLength = y.length;
var strLength1 = y.length;
console.log("类型断言: " + strLength);
console.log("类型断言: " + strLength1);
