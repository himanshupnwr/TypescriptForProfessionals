//readonly array
function reverse(input: readonly number[]): number[]
{
    return input.slice().sort().reverse(); //have to use slice() for readonly arrays
}

const start = [1,2,3,4,5];

const result = reverse(start); 

console.log(result); // [5,4,3,2,1]
console.log(start); //[1,2,3,4,5]

type Neat = readonly number[];
type Long = ReadonlyArray<number>;

//tuples are just array with fixed length

type TuplePoint = readonly [number, number];

function move(point:TuplePoint, x:number, y:number): TuplePoint
{
    return [point[0] + x, point[1] + y];
}

const tuplePoint: TuplePoint = [0,0];

const moved = move(tuplePoint, 10, 10);

console.log(moved); //[10,10]
console.log(tuplePoint);//[0,0]