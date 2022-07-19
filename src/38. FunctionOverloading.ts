function makeDate(timestamp: number): Date;
function makeDate(year:number, month: number, day: number): Date;
function makeDate(timestampOrYear:number, month?: number, day?: number): Date{
    if(month !=null && day!=null)
    {
        return new Date(timestampOrYear, month - 1, day);
    }
    else
    {
        return new Date(timestampOrYear);
    }
}

const doomsday = makeDate(200,2,1);
const epoch = makeDate(0);
//const invalid = makeDate(2000,2); //Typescript Error no overload excpects two arguements