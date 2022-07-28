"use strict";
//definite assignment checks
//if we do not assign the value of x and y in a constrcutor then we will get an error from typescript compiler
class StrictPoint {
    //creatingconstructot
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
}
const points = [
    { x: 1, y: 2, move(x, y) { } },
    { x: 3, y: 4, move(x, y) { } }
];
//create
const paint = new StrictPoint(1, 2);
paint.move(1, 3);
console.log(paint.x, paint.y);
function getAllXPoints(pointx) {
    const pointer = points.find(x => x.x == pointx);
    //we will have to use this condition becuase if we do not add this and x is undefined then return will throw exception.
    //another feature of typescript of strict assignment checks
    if (pointer == null) {
        throw new Error('point not found');
    }
    return pointer.x;
}
