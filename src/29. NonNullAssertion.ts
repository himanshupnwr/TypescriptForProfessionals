type NonNullPerson = {
    name: string,
    email?: string
}

function sendEmail(email:string)
{
    console.log('Send mail to', email);
}

function ensureContactable(person: NonNullPerson)
{
    if(person.email == null) throw new Error('not contactable');
}

function contact(person: NonNullPerson){
    ensureContactable(person);
    sendEmail(person.email!)
}

//By giving the symbol ! infront of the type variable we assert to 
//typescript that we have taken care that the value will not be null
//this will remove typescript error of possible null value