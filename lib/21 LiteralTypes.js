"use strict";
let direction;
direction = 'North';
direction = 'East';
//direction = 'adsdf'; gets error of trying to add any other value
function movedirection(distanceMetres, direction) {
    console.log(`Moving ${distanceMetres} towards ${direction}`);
}
function crollDice() {
    return (Math.floor(Math.random() * 6) + 1); //type assestion to dice value
}
//if(rollDice() == 7) //will not allow to compare with 7 as its not a valid type in dicevalue
//{
//    throw new Error(`Not Possible`);
//}
