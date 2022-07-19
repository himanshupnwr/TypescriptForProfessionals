const strs = {
    hello:'world'
}

console.log(strs['hello']);

const nums = {
    1337: 'leet'
}

console.log(nums[1337]);

type Dictionary = {
    [key: string]: boolean
}

type SPerson = {
    displayName : string,
    email: string
}

type PersonDictionary = {
    [username:string]:SPerson | undefined
}

const persons : PersonDictionary = {};

persons['john'] = {displayName: 'JohnDoe', email: 'john@example.com'};
console.log(persons['john']);
delete persons['john'];