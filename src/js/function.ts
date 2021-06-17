// 约束参数和约束返回值,arg2使用默认值,arg3为可选参数,arg4为剩余参数，使用联合类型
function fun(arg1: string, arg2: number = 6, arg3?: (number | string)[], ...args: string[]): string {
    console.log(arguments);
    console.log(arg2);
    console.log(args);
    return arg1;
}

fun("monkey");
fun("monkey", 99, [1, 2, 3, 4, "a"])


// 函数的完整定义
const fn3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

// 函数重载：函数名字相同，参数不同

function add(x: number, y: number): number
function add(x: string, y: string): string

function add(x, y) {
    return x + y;
}

console.log(add(1,2))
console.log(add('a','b'))
