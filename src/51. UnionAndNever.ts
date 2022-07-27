/** Conditional types with union and never */

export type notEmpty<T> = T extends null | undefined ? never : T;

type Example = notEmpty<string | null>;

type Expanded = notEmpty<string> | notEmpty<null>;

type moreExpanded = (string extends null | undefined ? never : string 
                    | null extends null | undefined ? never : string);


type exampleExpanded = string | never;

type Result = string;