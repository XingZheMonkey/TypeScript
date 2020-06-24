"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        Person.age = age; // 静态资源用类名调用
        this.email = email;
    }
    Person.prototype.print = function () {
        console.log(this.name + "," + Person.age + "," + this.email);
    };
    // 静态方法
    Person.show = function () {
        // 静态方法只能访问静态变量
        console.log(this.age);
    };
    return Person;
}());
var p1 = new Person("monkey", 15, "12@qq.com");
p1.print();
Person.show(); // 调用静态方法
var Stu = /** @class */ (function (_super) {
    __extends(Stu, _super);
    function Stu(name, age, email) {
        return _super.call(this, name, age, email) || this;
    }
    Stu.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("我是子类的print方法");
    };
    return Stu;
}(Person));
var stu1 = new Stu("king", 16);
stu1.print();
