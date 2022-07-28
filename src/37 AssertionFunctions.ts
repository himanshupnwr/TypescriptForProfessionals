import { isAssertionExpression } from "typescript";

type Date = string;

type AssertPerson = {
    name: string,
    dateOfBirth: Date
}

//simple syntax of an assert 
function assert(condition: unknown, message: string): asserts condition {
    if(!condition) throw new Error(message);
}

//implementation
function assertDate(value:unknown): asserts value is Date {
    if(value instanceof Date) return;
    else throw new TypeError('value is not a Date');
}
const maybePerson = loadPerson(); // api method that gets the value

assert(maybePerson !=null, 'Could not load person');
console.log('Name:', maybePerson.name);

assertDate(maybePerson.dateOfBirth);
console.log('DateOfBirth', maybePerson.dateOfBirth);

function loadPerson() : AssertPerson
{
    var persondata = {
        name: 'name',
        dateOfBirth: Date.now().toString()
    };
    return persondata as AssertPerson;
}