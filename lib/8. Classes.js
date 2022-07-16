"use strict";
//classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMetres) {
        console.log(`${this.name} moved ${distanceInMetres}m.`);
    }
}
let cat = new Animal('cat');
cat.move(10);
//cat.name = 'Dog'; //inaccessible due to being made protected
class Bird extends Animal {
    fly(distanceInMetres) {
        console.log(`${this.name} moved ${distanceInMetres}m.`);
    }
}
