"use strict";
//The key of type operator takes a type as input and returns a union of the keys from that type.
const johnpapa = {
    name: 'john',
    age: 35,
    location: 'Melbourne'
};
function logGet(obj, key) {
    const value = obj[key];
    console.log('Getting', key, value);
    return value;
}
const age = logGet(johnpapa, 'age'); //35
function logSet(obj, key, value) {
    console.log('Setting:', key, value);
    obj[key] = value;
}
logSet(johnpapa, 'age', 36);
