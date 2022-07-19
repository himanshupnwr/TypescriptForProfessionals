type NameFields = {firstname:string, lastname: string}

function addFullName<T extends NameFields>(obj: T): T & {fullName: string}
{
    return {
        ...obj,
        fullName: `${obj.firstname} ${obj.lastname}`
    }
}

const john = addFullName({
    email: 'john@example.com',
    firstname: 'John',
    lastname: 'Doe'
})

console.log(john.email);
console.log(john.fullName);

const jane = addFullName({ firstname: 'Jane', lastname: 'Austen'})