type UDCircle = {
    kind: 'circle',
    radius: number
}

type UDSquare = {
    kind: 'square',
    size : number,
};

type UDRectangle = {
    kind: 'rectangle',
    width: number,
    height: number
};

type UDShape = UDCircle | UDSquare | UDRectangle;

//user defined type guards
function isSquare(shape:UDShape): shape is UDSquare{
    return 'square' in shape;
}

function isRectangle(shape:UDShape): shape is UDRectangle{
    return 'rectangle' in shape;
}

function isCircle(shape:UDShape): shape is UDCircle{
    return 'circle' in shape;
}

function UDarea(shape: UDShape)
{
    if(isCircle(shape))
    {
        return Math.PI * (shape.radius ** 2);
    }
    if(isSquare(shape))
    {
        return shape.size * shape.size;
    }
    if(isRectangle(shape))
    {
        return shape.width * shape.height;
    }
}