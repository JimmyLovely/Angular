export interface IVm {
    name: string;
    product: string;
    installation: string;
    os: string;
    ip: string;
    owner: string;
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
}