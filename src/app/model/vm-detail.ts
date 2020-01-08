import { ISystemInfo } from './system-info';
import { IProduct } from './product';

export interface IVmDetail {
    name: string;
    installation: string;
    ip: string;
    owner: string;
    productInfo: IProduct[];
    systemInfo: ISystemInfo;
}

export class VmDetail {
    constructor() {

    }

    name: string = "";
    installation: string = "";
    ip: string = "";
    owner: string = "";
    productInfo: IProduct[];
    systemInfo: ISystemInfo;
}