"use strict";
exports.__esModule = true;
var arr = ["index", "1", "2"]; // 接口约束数组内容皆为string
var json = {
    name: "as",
    age: 23
};
// 接口就是把一些类型封装成一个对象进行约束使用
function printLabel(labelledObj) {
    console.log(labelledObj.label);
    console.log(labelledObj.name);
    console.log(arguments);
}
var myObj = { size: 10, label: "Size 10 Object", name: "monkey" };
printLabel(myObj);
