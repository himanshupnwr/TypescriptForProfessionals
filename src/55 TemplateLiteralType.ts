type CssValue =
    //implies px
    | number
    //number + px|em|rem
    |`${number}px`
    |`${number}em`
    |`${number}rem`

function size(input: CssValue)
{
    return typeof input == 'number'? input + 'px' : input
}

size(123);
size('123px');
size('12em');
//size('12ex'); //error

//example 2
type Size = 'small' | 'medium' | 'large';

type Color = 'primary' | 'secondary';

type Style = `${Size}-${Color}`

function applyStyle(Style: Style)
{

}

applyStyle('small-primary');
applyStyle('medium-primary');
//applyStyle('larg-primary'); // Error