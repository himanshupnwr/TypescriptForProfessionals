"use strict";
var _a, _b;
class GenericQueue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
const genericQueue = new GenericQueue();
genericQueue.push(123);
genericQueue.push(456);
console.log((_a = genericQueue.pop()) === null || _a === void 0 ? void 0 : _a.toPrecision(1));
console.log((_b = genericQueue.pop()) === null || _b === void 0 ? void 0 : _b.toPrecision(1));
