// 约束参数和约束返回值,arg2使用默认值,arg3为可选参数,使用联合类型
function fun(arg1:string,arg2:number=6,arg3?:(number|string)[]):string{
    console.log(arguments);
    console.log(arg2);
    return arg1;
}

fun("monkey");
fun("monkey",99,[1,2,3,4,"a"])