"use strict";
const dave2D = {
    name: 'dave',
    role: 'drummer',
    skills: ['drumming', 'headbang']
};
//as const assertion make the variables as literal type and make all of variable as readonly and arrays as readonly tuples
//now they cannot be modified in any way
function layout(settings) {
    console.log('performaing layout', settings);
}
const example = {
    align: 'left',
    padding: 0
};
layout(example); //will give error if example is not made as const
