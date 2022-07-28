type CallAdd = {
    (a:number, b:number) : number,
    (a:number, b:number, c:number):number,
    debugName?:string
};

const callAdd: CallAdd = (a:number, b:number, c?:number) => 
{
    return a+b+ (c!=null?c:0);
};

callAdd.debugName = 'addition Function';