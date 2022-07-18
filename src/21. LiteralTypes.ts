type CardinalDirection = 'East' | 'West' | 'North' | 'South';

let direction:CardinalDirection;

direction = 'North';
direction = 'East';
//direction = 'adsdf'; gets error of trying to add any other value

function move(distanceMetres: number, direction:CardinalDirection)
{
    console.log(`Moving ${distanceMetres} towards ${direction}`);
}

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice()
{
    return (Math.floor(Math.random() * 6) + 1) as DiceValue; //type assestion to dice value
}

//if(rollDice() == 7) //will not allow to compare with 7 as its not a valid type in dicevalue
//{
//    throw new Error(`Not Possible`);
//}