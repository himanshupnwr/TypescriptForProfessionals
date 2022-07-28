type Roles = 'admin' | 'owner';

let peopleWithRoles: Record<Roles, string[]> = {
    'owner': ['Jane', 'June'],
    'admin': ['John']
}

/*peopleWithRoles = {
    'owner' : ['Jane', 'June'],
};*/ // Error admin is missing

const admins: string[] = peopleWithRoles['admin']; //safe

type Pages = Record<'home'| 'services' | 'about' | 'contract', {id:string, title: string}>;