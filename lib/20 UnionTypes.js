"use strict";
//pass value as number or string in place of padding parameter
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ' + value);
    }
    if (typeof padding === 'number') {
        return padding + value;
    }
    throw new Error(`Expected number or string, got` + { padding });
}
padLeft('Hello World', 4);
//padLeft('hello world', false); will get error if sending type other than int and string
