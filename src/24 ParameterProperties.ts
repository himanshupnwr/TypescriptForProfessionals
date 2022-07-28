//declare the class properties directly in constructor

class PPerson
{
    constructor(public name: string, public age: number){}
}

const adam = new PPerson('Adam', 12000)
console.log(adam.name, adam.age);