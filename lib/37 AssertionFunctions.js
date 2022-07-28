"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//simple syntax of an assert 
function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}
//implementation
function assertDate(value) {
    if (value instanceof Date)
        return;
    else
        throw new TypeError('value is not a Date');
}
const maybePerson = loadPerson(); // api method that gets the value
assert(maybePerson != null, 'Could not load person');
console.log('Name:', maybePerson.name);
assertDate(maybePerson.dateOfBirth);
console.log('DateOfBirth', maybePerson.dateOfBirth);
function loadPerson() {
    var persondata = {
        name: 'name',
        dateOfBirth: Date.now().toString()
    };
    return persondata;
}
