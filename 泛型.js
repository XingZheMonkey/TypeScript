"use strict";
exports.__esModule = true;
// 泛型类
var myArrayList = /** @class */ (function () {
    function myArrayList() {
        this.list = [];
    }
    myArrayList.prototype.add = function (val) {
        for (var i = 0; i < val.length; i++) {
            this.list.push(val[i]);
        }
    };
    return myArrayList;
}());
var arr = new myArrayList();
arr.add([11, 12]);
console.log(arr.list);
var add = function (x, y) {
    return x + y;
};
console.log(add(3, 4));
