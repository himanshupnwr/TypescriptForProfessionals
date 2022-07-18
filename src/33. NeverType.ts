type NSquare = {
    kind: 'square',
    size: number
};

type NRecatngle = {
    kind: 'rectangle',
    width: number,
    height: number
};

type NCircle = {
    kind: 'circle',
    radius: number
};

type NShape = NSquare | NRecatngle | NCircle;

function area(s: NShape)
{
    if(s.kind === 'square')
    {
        return s.size * s.size;
    }
    else if(s.kind === 'rectangle')
    {
        return s.width * s.height;
    }
    else if(s.kind === 'circle')
    {
        return Math.PI * (s.radius ** 2);
    }

    const _ensureAllCasesAreHandled: never = s;
    return _ensureAllCasesAreHandled;
}