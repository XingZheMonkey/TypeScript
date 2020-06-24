// 泛型类
class myArrayList<T>{
    public name:T
    public list:T[]=[]
    add(val:T[],):void{
        for(let i=0;i<val.length;i++){
            this.list.push(val[i]);
        }
    }
}

let arr=new myArrayList<number>();
arr.add([11,12]);
console.log(arr.list);


// 泛型接口 
interface Iadd<T>{
    (x:T,y:T):T
}

let add:Iadd<number>=function(x:number,y:number){
    return x+y;
}

console.log(add(3,4));


export {}