"use strict";
let regexp = new RegExp('ab+c');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
/** A first in first out collection */
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue();
