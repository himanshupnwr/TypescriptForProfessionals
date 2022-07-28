"use strict";
function MakeReadOnly(object) {
    return Object.freeze(Object.assign({}, object));
}
const editablePoints = { x: 0, y: 0 };
editablePoints.x = 2; //allowed
const ReadonlyPoint = MakeReadOnly(editablePoints);
//ReadonlyPoint.x = 5; //not allowed
