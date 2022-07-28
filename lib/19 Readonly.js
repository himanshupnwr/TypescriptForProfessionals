"use strict";
const pointing = { x: 1, y: 2 };
//variable assignment error becase of const
//pointing = {x:2, y:3};
//but in javascipt nothing stops us from assigning values to individual members of the type
//pointing.x = 2; error of type memebers are readonly
//pointing.y = 3;
// to handle this typescript provides readonly keyword
console.log(`(${pointing.x}, (${pointing.y}))`);
//we can assign or change the value of a readonly in a constructor
class AnimalReadonly {
    constructor(num) {
        this.x = 50;
        this.x = num;
    }
}
const Sheep = new AnimalReadonly(100);
console.log(Sheep.x);
//Sheep.x = 150; not allowed 
