interface Point2d
{
    x:number,
    y:number
}

interface Point3d extends Point2d{
    z:number
}

export const point: Point3d = {
    x:0,
    y:0,
    z:0
}