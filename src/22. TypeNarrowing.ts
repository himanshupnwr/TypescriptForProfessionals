class Cat {
    meow()
    {
        console.log('meow');
    }
}

class Dog{
    bark()
    {
        console.log('woof');
    }
}

type AnimalCheck = Cat | Dog;

function speak(animal: AnimalCheck)
{
    if(animal instanceof Cat)
    {
        animal.meow();
    }
    if(animal instanceof Dog)
    {
        animal.bark();
    }
}

type Square = {
    size : number,
};

type Rectangle = {
    width: number,
    height: number
};

type Shape = Square | Rectangle;

function area(shape: Shape)
{
    if('size' in shape)
    {
        return shape.size * shape.size;
    }
    if('width' in shape)
    {
        return shape.width * shape.height;
    }
}