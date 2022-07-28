export type Pointt ={
    x:number,
    y:number,
    z:number
};

//how internally mapped types work
/*type ReadOnlyPoint = {
    readonly[Item in 'x' | 'y' | 'z' ]: number
};*/

//internally generic mapped types
/*type ReadOnlyPointt<T> = {
    readonly[Item in keyof T]: T[Item]

    const constcent: ReadOnlyPoint<Pointt> = {
    x:0,
    y:0,
    z:0
}
};*/

//just directly mapping works 
const constcent: Readonly<Pointt> = {
    x:0,
    y:0,
    z:0
}