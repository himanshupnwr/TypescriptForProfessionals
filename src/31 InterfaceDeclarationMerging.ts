//Express base
export interface Request
{
    body:any;
}

export interface Request
{
    json: any;
}

function handleRequest(req: Request)
{
    req.json,
    req.body
}

//Merged the interfaces into one