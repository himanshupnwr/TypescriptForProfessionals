//optional modifier ?

type OptionalPerson = {
    name:string,
    email:string,
    phone?:string,
    num?:number | null
}

const bruce: OptionalPerson = {
    name: 'Bruce',
    email: 'Email@email.com',
    phone: '911',
    num: undefined
}

const alfred: OptionalPerson = {
    name: 'Alfred',
    email: 'alfred@example.com',
    //phone: undefined // valid
    //phone : 111 // error
    num: null //will not work like undefined. we have to explicitly define num as null
}

