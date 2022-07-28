function MakeReadOnly<T>(object: T) : Readonly<T>
{
    return Object.freeze({...object})
}

const editablePoints = {x:0, y:0}
editablePoints.x = 2; //allowed

const ReadonlyPoint = MakeReadOnly(editablePoints);
//ReadonlyPoint.x = 5; //not allowed