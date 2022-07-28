"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
//example 2
class State {
    constructor(current) {
        this.current = current;
    }
    updateState(next) {
        this.current = Object.assign(Object.assign({}, this.current), next);
    }
}
exports.State = State;
const state = new State({ x: 0, y: 0 });
state.updateState({ y: 123 });
console.log(state.current); //{x:0, y:123}
