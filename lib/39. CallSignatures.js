"use strict";
const callAdd = (a, b, c) => {
    return a + b + (c != null ? c : 0);
};
callAdd.debugName = 'addition Function';
