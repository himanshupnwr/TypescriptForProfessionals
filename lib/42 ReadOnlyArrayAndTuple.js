"use strict";
//readonly array
function reverse(input) {
    return input.slice().sort().reverse(); //have to use slice() for readonly arrays
}
const start = [1, 2, 3, 4, 5];
const result = reverse(start);
console.log(result); // [5,4,3,2,1]
console.log(start); //[1,2,3,4,5]
function move(point, x, y) {
    return [point[0] + x, point[1] + y];
}
const tuplePoint = [0, 0];
const moved = move(tuplePoint, 10, 10);
console.log(moved); //[10,10]
console.log(tuplePoint); //[0,0]
