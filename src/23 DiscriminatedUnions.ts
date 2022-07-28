type DCircle = {
    kind: 'circle',
    radius: number
}

type DSquare = {
    kind: 'square',
    size : number,
};

type DRectangle = {
    kind: 'rectangle',
    width: number,
    height: number
};

type DShape = DCircle | DSquare | DRectangle;

function Darea(shape: DShape)
{
    if(shape.kind == 'circle')
    {
        return Math.PI * (shape.radius ** 2);
    }
    if(shape.kind == 'square')
    {
        return shape.size * shape.size;
    }
    if(shape.kind == 'rectangle')
    {
        return shape.width * shape.height;
    }
}

//Example 2

type ValidationSuccess = {
    isValid: true,
    validatedValue: string
}

type ValidationFailure = {
    isValid: false,
    errorReason: string
}

type ValidationResult = ValidationSuccess | ValidationFailure

function logResult(result: ValidationResult)
{
    if(result.isValid)
    {
        console.log("success, validation value is:", result.validatedValue);
    }
    if(result.isValid === false)
    {
        console.error('Failure, error reason:', result.errorReason);
    }
}