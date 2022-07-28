let leet:unknown;
let stringleet;

//later
leet = '1337';
stringleet = '1337';

//use a number
const num = leet as number; //type assestion where leet and num are actually string calue
const number = +stringleet; //type casting string to integer

console.log(num == 1337) // false
console.log(num); // '1337'

console.log(number == 1337) // true
console.log(number); // 1337