"use strict";
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 10, z: 20 };
/** Extra info */
point2D = point3D;
function takesPoint2D(point) { }
takesPoint2D(point3D);
/**Error missing info cannot pass point2d to 3d bacause it does not have the extra z variable */
//point3D = point2D; //Error
function takesPoint3D(point) { }
//takesPoint3D(point2D); //Error
