"use strict";
let peopleWithRoles = {
    'owner': ['Jane', 'June'],
    'admin': ['John']
};
/*peopleWithRoles = {
    'owner' : ['Jane', 'June'],
};*/ // Error admin is missing
const admins = peopleWithRoles['admin']; //safe
