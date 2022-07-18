export interface InputProps{
    type: 'text' | 'email',
    value: string,
    OnChange: (newValue: string) => void
}

//type alias we can use only in types and not in interfaces
type InputOnChange = (newValue: InputValue) => void;

type InputValue = string;

type InputType = 'text' | 'email';

export type InputPropss = {
    type: InputType, //typealias
    OnChange: InputOnChange
}