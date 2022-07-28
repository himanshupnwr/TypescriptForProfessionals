//classes
class Animal{
    protected name:string;
    constructor(name:string)
    {
        this.name = name;
    }

    public move(distanceInMetres: number): void{
        console.log(`${this.name} moved ${distanceInMetres}m.`);
    }
}

let cat = new Animal('cat');
cat.move(10);
//cat.name = 'Dog'; //inaccessible due to being made protected

class Bird extends Animal{
    fly(distanceInMetres: number)
    {
        console.log(`${this.name} moved ${distanceInMetres}m.`);
    }
}