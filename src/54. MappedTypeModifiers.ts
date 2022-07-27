import { updateLanguageServiceSourceFile, updateStatement } from "typescript"

export type PointMTM = {
    readonly x:number,
    y? : number
}

export type Mapped<T> = {
    +readonly [P in keyof T] -?: T[P]

}

export type Result = Mapped<PointMTM>

//example 2

export class State<T>{
    constructor(public current: T){}
    updateState(next:Partial<T>)
    {
        this.current = {...this.current, ...next};
    }
}

const state = new State({x:0, y:0});
state.updateState({y:123});
console.log(state.current); //{x:0, y:123}