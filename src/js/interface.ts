(() => {
    // 1.接口约束数组
    interface Iarr {
        [index: number]: String;
    }

    let arr: Iarr = ["index", "1", "2"];   // 接口约束数组内容皆为string

    // 2.接口约束json
    interface Ijson {
        name: string,
        age?: number
    }
    let json: Ijson = {
        name: "as",
        age: 23
    }

    // 3.
    interface LabelledValue {
        label: string;   // 必选类型
        name?: string  // 可选类型
    }

    // 接口就是把一些类型封装成一个对象进行约束使用

    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
        console.log(labelledObj.name)
        console.log(arguments);
    }

    let myObj = { size: 10, label: `Size 10 Object`, name: "monkey" };
    printLabel(myObj);

})()