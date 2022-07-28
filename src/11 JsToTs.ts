//Javascipt to Typescript
//we can use unknown type to existing variable to flag if there are any typecheck errors in javascript code

let someLegacyVariable: unknown;

someLegacyVariable = loadString();

if(typeof(someLegacyVariable) == 'string')
{
    console.log(someLegacyVariable.trim());
}

someLegacyVariable = loadNumber();

if(typeof someLegacyVariable == 'number')
{
    console.log(someLegacyVariable.toFixed(2));
}