(()=>{
    abstract class Animal {
        abstract eat()
        sayhi(){
            console.log('hello')
        }
    }

    class Dog extends Animal {
        eat(){
            console.log('吃狗粮')
        }
    }

    const wang:Dog = new Dog()
    wang.sayhi()
    wang.eat()
})()
