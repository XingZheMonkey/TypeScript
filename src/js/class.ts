(() => {
    // 父类
    class Person {
        name: string;
        static age: number;
        email?: string
        constructor(name: string, age: number, email?: string) {  // email可选
            this.name = name;
            Person.age = age;  // 静态资源用类名调用
            this.email = email;
        }
        print() {
            console.log(this.name + "," + Person.age + "," + this.email);
        }

        // 静态方法
        static show() {
            // 静态方法只能访问静态变量
            console.log(this.age);
        }
    }


    // 实例化父类
    let p1 = new Person("monkey", 15, "12@qq.com");
    p1.print();
    Person.show();  // 调用静态方法


    // 子类
    class Stu extends Person {
        constructor(name: string, age: number, email?: string) {
            super(name, age, email);
        }
        print() {
            super.print();
            console.log("我是子类的print方法");
        }
    }

    // 实例化子类
    let stu1 = new Stu("king", 16);
    stu1.print();
    console.log(stu1)



    // 修饰符

    // public（默认） : 公有，可以在任何地方被访问。

    // protected : 受保护，可以被其自身以及其子类和父类访问。

    // private : 私有，只能被其定义所在的类访问


    interface ICar {
        price: number
        tips: string
        shache: string
        run(): number
    }

    interface IBird {
        fly(): String
    }

    // 接口继承，一个类可以被多个接口约束
    interface IFlyCar extends ICar, IBird { }

    class Tesila implements IFlyCar {
        price: number
        readonly tips: string
        shache: string
        constructor(price: number, tips: string, shache: string) {
            this.price = price;
            this.tips = tips;
            this.shache = shache;
        }
        run() {
            console.log(this.price);
            return this.price;
        }
        fly() {
            console.log(this.tips.concat(this.shache));

            return this.shache;
        }
    }

    const tesila = new Tesila(10000, "特斯拉", '刹车失灵');
    tesila.run()
    tesila.fly()

})()