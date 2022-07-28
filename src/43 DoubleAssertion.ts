type DAPoint2D = { x:number, y:number};
type DAPoint3D = {x:number, y:number, z:number};
type DAPerson = {name: string, email: string}

let point2d: DAPoint2D = {x:0, y:0};
let point3d: DAPoint3D = {x:10, y:20, z:30};
let daperson: DAPerson = {name:'john', email:'john@example.com'};

point2d = point3d;
//point3d = point2d; // error
point3d = point2d as DAPoint3D; //assertion that point2d is DAPoint3d

point3d = person as unknown as Point3D; //double assertion