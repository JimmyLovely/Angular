import { SimpleObject, ISimpleObject } from "./simple-object";

export interface IDeepObject {
    simpleProperty: string;
    objectProperty: ISimpleObject;
    arrayObjectProperty: ISimpleObject[];
}

export class DeepObject {
    constructor() {
    }

    simpleProperty: string = '';
    objectProperty: SimpleObject = new SimpleObject();
    arrayObjectProperty: SimpleObject[] = [];
}
