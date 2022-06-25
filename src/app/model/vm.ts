export interface IVm {
    name: string;
    product: string;
    installation: string;
    os: string;
    ip: string;
    owner: string;
    count: number;
}

export class Vm {
    constructor() {

    }

    name: string = "";
    product: string = "";
    installation: string = "";
    os: string = "";
    ip: string = "";
    owner: string = "";
    count: number = -1;
}
