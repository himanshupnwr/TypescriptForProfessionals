"use strict";
function Darea(shape) {
    if (shape.kind == 'circle') {
        return Math.PI * (shape.radius ** 2);
    }
    if (shape.kind == 'square') {
        return shape.size * shape.size;
    }
    if (shape.kind == 'rectangle') {
        return shape.width * shape.height;
    }
}
function logResult(result) {
    if (result.isValid) {
        console.log("success, validation value is:", result.validatedValue);
    }
    if (result.isValid === false) {
        console.error('Failure, error reason:', result.errorReason);
    }
}
