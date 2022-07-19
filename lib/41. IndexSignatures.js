"use strict";
const strs = {
    hello: 'world'
};
console.log(strs['hello']);
const nums = {
    1337: 'leet'
};
console.log(nums[1337]);
const persons = {};
persons['john'] = { displayName: 'JohnDoe', email: 'john@example.com' };
console.log(persons['john']);
delete persons['john'];
