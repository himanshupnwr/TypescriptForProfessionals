//its better to use the type unknown because you get the benefit of any type and also type safety of unknown

function logUknown(value: unknown)
{
    if(typeof value == 'number')
    {
        console.log(value.toFixed(2));
    }
    else{
        console.log(value);
    }
}

logUknown(123.456);
logUknown('Hello World');