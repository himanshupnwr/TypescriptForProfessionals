type AnimalKey = {
    name: string,
    voice(): string
}

function log(animal: AnimalKey)
{
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}

class CatKey implements AnimalKey
{
    constructor(public name:string){}

    voice(): string {
        return 'meow'
    }
}

class DogKey implements AnimalKey
{
    constructor(public name: string){}

    voice(): string {
        return 'bark'
    }
}