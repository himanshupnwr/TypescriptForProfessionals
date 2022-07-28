"use strict";
let add;
add = function (a, b) {
    return a + b;
};
add = (a, b) => a + b;
function Sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
