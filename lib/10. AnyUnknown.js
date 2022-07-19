"use strict";
let exampleAny;
let exampleUnknown;
//any
exampleAny = 123;
exampleAny = 'some string';
//unknown
exampleUnknown = 123;
exampleUnknown = 'some string';
//any
exampleAny.allows.anything.you.can.imagine();
let anySetBool = exampleAny;
//unknown
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
    let unknownSetBool = exampleUnknown;
}
function loadString() {
    return 'some string';
}
function loadNumber() {
    return 123.456;
}
function logger(value) {
    if (typeof value == 'number') {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
logger(123.456);
logger('Hello World');
//we can assign anything to any but when we use it we have to define a possible type
