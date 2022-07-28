"use strict";
//definite assignemnt assertion
//when we add the non null assertion operator at the time of declaration we are telling typescript 
//that the value of that variable will never be null so we never get the possible null value compiler error 
let dice;
function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}
console.log('current dice value is', dice);
//another example
class AssertPoint {
    constructor() {
        this.MoveRandom();
    }
    MoveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}
