// 1.字符串类型
let str:string="i am a string"

// 2.布尔类型
let isTrue:boolean=false;

// 3.数组类型
let list:number[]=[1,2,3,4];

// 4.元组类型
let arr:[string,number]=["test",1];
console.log("元组类型 "+arr[0])

// 5.枚举类型
enum weeks{Mon,Tue,Wed}
let day:weeks=weeks.Mon;
console.log("枚举类型 day="+day);
console.log("枚举类型 weeks[0]="+weeks[0]);
console.log("枚举类型 weeks['Mon']="+weeks["Mon"]);

// 6.任意类型
let value:any;
value="test";
console.log("any类型 "+value)
value=5;
console.log("any类型 "+value)

// 7.空类型
function fn():void{
    console.log("我是void类型，无返回值 ")
}
fn()

// 7.联合类型
let x:number | string | boolean;  // x 可为三种类型中的一个

// 8.类型断言
let y:number | string | boolean="this is a string";
let strLength=(y as string).length;
let strLength1=(<string>y).length;
console.log("类型断言: " + strLength)
console.log("类型断言: " + strLength1) 

// 9.类型推论
let num=12;
// num="12";  ts自动将num推断为number类型，所以不接受其他类型


export {}
