"use strict";
//declare the class properties directly in constructor
class PPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const adam = new PPerson('Adam', 12000);
console.log(adam.name, adam.age);
