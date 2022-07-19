"use strict";
//user defined type guards
function isSquare(shape) {
    return 'square' in shape;
}
function isRectangle(shape) {
    return 'rectangle' in shape;
}
function isCircle(shape) {
    return 'circle' in shape;
}
function UDarea(shape) {
    if (isCircle(shape)) {
        return Math.PI * (shape.radius ** 2);
    }
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
}
