const personDetails = {
    firstName:'Jon',
    lastName:'Wick'
}

type PersonResponse = typeof personDetails;

function processResponse(person: PersonResponse)
{
    console.log('Full name', `${person.firstName} ${person.lastName}`)
}