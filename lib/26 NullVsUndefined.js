"use strict";
function decorate(value) {
    //handle a null check and undefined both as null == undefined is true
    if (value == null) {
        return value;
    }
    return `-- ${value.trim()} --`;
}
console.log(decorate('Hello'));
console.log(decorate('Hello World'));
console.log(decorate(null));
console.log(decorate(undefined));
