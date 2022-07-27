//The key of type operator takes a type as input and returns a union of the keys from that type.

type KPerson = {
    name: string,
    age: number,
    location: string
}

const johnpapa: KPerson = {
    name: 'john',
    age: 35,
    location: 'Melbourne'
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key)
{
    const value = obj[key];
    console.log('Getting', key, value);
    return value;
}

const age = logGet(johnpapa, 'age'); //35

function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key])
{
    console.log('Setting:', key, value);
    obj[key] = value;
}

logSet(johnpapa, 'age', 36);