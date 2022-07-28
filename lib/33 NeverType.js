"use strict";
function area(s) {
    if (s.kind === 'square') {
        return s.size * s.size;
    }
    else if (s.kind === 'rectangle') {
        return s.width * s.height;
    }
    else if (s.kind === 'circle') {
        return Math.PI * (s.radius ** 2);
    }
    const _ensureAllCasesAreHandled = s;
    return _ensureAllCasesAreHandled;
}
