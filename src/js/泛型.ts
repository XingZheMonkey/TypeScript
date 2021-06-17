(() => {
    // 泛型类
    class myArrayList<T>{
        public name: T
        public list: T[] = []
        add(val: T[],): void {
            for (let i = 0; i < val.length; i++) {
                this.list.push(val[i]);
            }
        }
    }

    let arr2 = new myArrayList<number>();
    arr2.add([11, 12]);
    console.log(arr2.list);


    // 泛型接口 
    interface Iadd<T> {
        (x: T, y: T): T
    }

    let add: Iadd<number> = function (x, y) {
        return x + y;
    }

    console.log(add(3, 4));


    // 多个泛型参数
    function getMsg<K, V>(val1: K, val2: V): [K, V] {
        return [val1, val2];
    }

    console.log(getMsg<number, string>(22, 'henry'));


    // 泛型约束
    interface ILength {
        length: number
    }

    function getLength<T extends ILength>(x: T): number {
        return x.length
    }

    console.log(getLength<string>("abcsefg"))


    // 泛型示例
    interface IBaseCURD<T> {
        data: Array<T>
        add: (t: T) => T
        getUserId: (id: number) => T
    }

    class User {
        id?: number
        name: string
        age: number
    }

    class UserCURD implements IBaseCURD<User>{
        data: Array<User> = []
        add(user: User): User {
            user.id = Date.now() + Number(Math.random().toFixed(0));
            this.data.push(user)
            return user
        }
        getUserId(id: number): User {
            return this.data.find(user => user.id == id)
        }
    }

    let henry = new UserCURD()
    henry.add({name:'henry',age:24})
    henry.add({name:'marry',age:24})
    console.log(henry.data)

})()
