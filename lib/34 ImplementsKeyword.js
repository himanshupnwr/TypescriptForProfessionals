"use strict";
function log(animal) {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}
class CatKey {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return 'meow';
    }
}
class DogKey {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return 'bark';
    }
}
