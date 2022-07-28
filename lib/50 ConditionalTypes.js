"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNumber = (value) => {
    typeof value === 'number' ? 'number' : 'string';
};
const withNumber = isNumber(123);
const withString = isNumber('stringvalue');
function typeName(t) {
    return typeof t;
}
const str = typeName('hello world');
const num = typeName(123);
const bool = typeName(true);
const undef = typeName(undefined);
const sym = typeName(Symbol('star'));
//const big = typeName(24n); bigint not available for targeting before es2020
const func = typeName(function () { });
const obj = typeName(null);
