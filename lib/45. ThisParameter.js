"use strict";
function double() {
    this.value = this.value * 2;
}
const valid = {
    value: 10,
    double
};
valid.double();
console.log(valid.value); //20
const invalid = {
    //valve: 10
    value: 10,
    double
};
invalid.double(); //if there is any typo in valid spelling then we will get error
//this has to the first parameter if we are using this in the function as parameter
