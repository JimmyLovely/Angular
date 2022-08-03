export interface ISimpleObject {
    name: string;
    age: number;
    isEnabled: boolean;
}

export class SimpleObject {
    constructor() {
    }

    name: string = '';
    age: number = 0;
    isEnabled: boolean = true;
}
