let Hello = load();

//use as if you know the unknown return type for type assesrtion
const trimmed = (hello as string).trim();

function load()
{
    return 'empty string';
}