//Fortunately, JavaScript also offers a lexically scoped this and the way to use that is with an arrow function.

//So instead of creating a simple method, we create grow old as a property, pointing to an arrow function arrow function in JavaScript captured this from the surrounding context.

//Since all property initializes execute at the end of the constructor, this will be bound to whatever instance is present within the constructor.

//And now, since it is no longer driven by the calling context, we don't need to worry about it being invoked incorrectly.

//And both our usages, both as a variable and within the set time out, will work as expected.

class Person
{
    private age: number;
    constructor(age:number)
    {
        this.age = age;
    }
    //use arrow function for lexical this
    growOld = () => {
        this.age++;
    }
    returnAge(){
        return this.age;
    }
}

const person = new Person(0);
//person.growOld();

const growOld = person.growOld();
setTimeout(person.growOld, 1000);
//now we can assign the method to a const variable and also pass it in another method without worrying about if this will work