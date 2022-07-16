let exampleAny: any;
let exampleUnknown: unknown;

//any
exampleAny = 123;
exampleAny = 'some string';

//unknown
exampleUnknown = 123;
exampleUnknown = 'some string';

//any
exampleAny.allows.anything.you.can.imagine();
let anySetBool:boolean = exampleAny;

//unknown
if(typeof exampleUnknown == 'string')
{
    exampleUnknown.trim();
}

if(typeof exampleUnknown == 'boolean')
{
    let unknownSetBool: boolean = exampleUnknown;
}

function loadString(): any{
    return 'some string';
}

function loadNumber(): any{
    return 123.456;
}

function log(value:unknown)
{
    if(typeof value == 'number')
    {
        console.log(value.toFixed(2));
    }
    else{
        console.log(value);
    }
}

log(123.456)
log('Hello World')

//we can assign anything to any but when we use it we have to define a possible type