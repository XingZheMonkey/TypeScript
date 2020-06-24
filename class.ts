// 父类
class Person{
    name:string;
    static age:number;
    email:string
    constructor(name:string,age:number,email?:string){  // email可选
        this.name=name;
        Person.age=age;  // 静态资源用类名调用
        this.email=email;
    }
    print(){
        console.log(this.name+","+Person.age+","+this.email);
    }

    // 静态方法
    static show(){
        // 静态方法只能访问静态变量
        console.log(this.age);
    }
}


// 实例化父类
let p1=new Person("monkey",15,"12@qq.com");
p1.print();
Person.show();  // 调用静态方法


// 子类
class Stu extends Person{
    constructor(name:string,age:number,email?:string){
        super(name,age,email);
    }
    print(){
        super.print();
        console.log("我是子类的print方法");
    }
}

// 实例化子类
let stu1=new Stu("king",16);
stu1.print();



// 修饰符

    // public（默认） : 公有，可以在任何地方被访问。

    // protected : 受保护，可以被其自身以及其子类和父类访问。

    // private : 私有，只能被其定义所在的类访问。


export {}