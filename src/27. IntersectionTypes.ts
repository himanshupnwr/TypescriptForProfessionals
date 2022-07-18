type Type1 = {
    x:number,
    y:number
}

//type 2 has what type1 had and more
type Type2 = Type1 & {
    z:number
}

type PersonName = {
    name: string
}

type Email = {
    email: string
}

type Phone = {
    phone: string
}

type ContactDetails = PersonName & Email & Phone;

function PublishDetails(details:ContactDetails)
{
    console.log(`${details.name}, ${details.email}, ${details.phone}`);
}

//Question - if two types are merged with & and both have a property of same name then how will it work like all type has property name
//then when we create a combined type and print name which name will print