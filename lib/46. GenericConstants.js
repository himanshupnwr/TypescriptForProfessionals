"use strict";
function addFullName(obj) {
    return Object.assign(Object.assign({}, obj), { fullName: `${obj.firstname} ${obj.lastname}` });
}
const john = addFullName({
    email: 'john@example.com',
    firstname: 'John',
    lastname: 'Doe'
});
console.log(john.email);
console.log(john.fullName);
const jane = addFullName({ firstname: 'Jane', lastname: 'Austen' });
