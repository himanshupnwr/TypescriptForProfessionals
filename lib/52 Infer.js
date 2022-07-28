"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = void 0;
//Example
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`
    };
}
exports.createPerson = createPerson;
function logPerson(person) {
    console.log('Person:', person.firstName, person.lastName, person.fullName);
}
