"use strict";
let Hello = load();
//use as if you know the unknown return type for type assesrtion
const trimmed = hello.trim();
function load() {
    return 'empty string';
}
