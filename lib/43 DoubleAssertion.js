"use strict";
let point2d = { x: 0, y: 0 };
let point3d = { x: 10, y: 20, z: 30 };
let daperson = { name: 'john', email: 'john@example.com' };
point2d = point3d;
//point3d = point2d; // error
point3d = point2d; //assertion that point2d is DAPoint3d
point3d = person; //double assertion
