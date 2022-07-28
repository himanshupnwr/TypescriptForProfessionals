const dave2D = {
    name:'dave',
    role:'drummer',
    skills: ['drumming', 'headbang']
} as const

//as const assertion make the variables as literal type and make all of variable as readonly and arrays as readonly tuples
//now they cannot be modified in any way

function layout(settings: {
    align: 'left' | 'right' | 'center',
    padding: number
})
{
    console.log('performaing layout', settings);
}

const example = {
    align: 'left',
    padding: 0
} as const

layout(example); //will give error if example is not made as const