"use strict";
class Cat {
    meow() {
        console.log('meow');
    }
}
class Dog {
    bark() {
        console.log('woof');
    }
}
function speak(animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    if (animal instanceof Dog) {
        animal.bark();
    }
}
function Aarea(shape) {
    if ('size' in shape) {
        return shape.size * shape.size;
    }
    if ('width' in shape) {
        return shape.width * shape.height;
    }
}
