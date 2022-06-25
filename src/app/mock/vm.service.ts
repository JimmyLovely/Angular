import { Injectable } from '@angular/core';
import { Observable, of as observableOf} from 'rxjs';

// Model
import { Vm } from '../model/vm';

// Service
import { IVmService } from '../service/i-vm.service';

@Injectable({
    providedIn: 'root'
})
export class VmMockService extends IVmService{
    constructor(
    ) {
        super();
    }

    private VMData = [
        {
            name: 'CNTLD9KBR01',
            product: 'Monaco',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.101',
            owner: 'Jimmy Li',
            count: 1
        },
        {
            name: 'CNTLD9KBR02',
            product: 'Mosaiq',
            installation: 'Default',
            os: 'Windows 7',
            ip: '10.140.115.102',
            owner: 'Cydval Liu',
            count: 2
        },
        {
            name: 'CNTLD9KBR03',
            product: 'Monaco',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.102',
            owner: 'Cydval Liu',
            count: 3
        },
        {
            name: 'CNTLD9KBR04',
            product: 'Monaco',
            installation: 'Default',
            os: 'Windows 8',
            ip: '10.140.115.103',
            owner: 'Jimmy Li',
            count: 4
        },
        {
            name: 'CNTLD9KBR05',
            product: 'Mosaiq',
            installation: 'Default',
            os: 'CentOS',
            ip: '10.140.115.104',
            owner: 'Jimmy Li',
            count: 5
        },
        {
            name: 'CNTLD9KBR06',
            product: 'Mosaiq',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.105',
            owner: 'Cydval Liu',
            count: 5
        },
        {
            name: 'CNTLD9KBR07',
            product: 'Mosaiq',
            installation: 'Default',
            os: 'Windows 8',
            ip: '10.140.115.104',
            owner: 'Jimmy Li',
            count: 6
        },
        {
            name: 'CNTLD9KBR08',
            product: 'Proton',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.106',
            owner: 'Jimmy Li',
            count: 6
        },
        {
            name: 'CNTLD9KBR09',
            product: 'Monaco',
            installation: 'Default',
            os: 'CentOS',
            ip: '10.140.115.107',
            owner: 'Cydval Liu',
            count: 7
        },
        {
            name: 'CNTLD9KBR10',
            product: 'Proton',
            installation: 'Default',
            os: 'Windows 8',
            ip: '10.140.115.108',
            owner: 'Jimmy Li',
            count: 8
        },
        {
            name: 'CNTLD9KBR11',
            product: 'Monaco',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.109',
            owner: 'Jimmy Li',
            count: 9
        },
        {
            name: 'CNTLD9KBR12',
            product: 'Mosaiq',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.110',
            owner: 'Jimmy Li',
            count: 10
        },
        {
            name: 'CNTLD9KBR13',
            product: 'Proton',
            installation: 'Default',
            os: 'CentOS',
            ip: '10.140.115.111',
            owner: 'Cydval Liu',
            count: 11
        },
        {
            name: 'CNTLD9KBR14',
            product: 'Monaco',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.112',
            owner: 'Jimmy Li',
            count: 12
        },
        {
            name: 'CNTLD9KBR15',
            product: 'Mosaiq',
            installation: 'Default',
            os: 'Ubuntu',
            ip: '10.140.115.113',
            owner: 'Jimmy Li',
            count: 13
        },
        {
            name: 'CNTLD9KBR16',
            product: 'Mosaiq',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.114',
            owner: 'Jimmy Li',
            count: 14
        },
        {
            name: 'CNTLD9KBR17',
            product: 'Monaco',
            installation: 'Default',
            os: 'Windows 8',
            ip: '10.140.115.115',
            owner: 'Cydval Liu',
            count: 15
        },
        {
            name: 'CNTLD9KBR18',
            product: 'Proton',
            installation: 'Default',
            os: 'Ubuntu',
            ip: '10.140.115.116',
            owner: 'Jimmy Li',
            count: 16
        },
        {
            name: 'CNTLD9KBR19',
            product: 'Monaco',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.117',
            owner: 'Jimmy Li',
            count: 17
        },
        {
            name: 'CNTLD9KBR20',
            product: 'Monaco',
            installation: 'Default',
            os: 'Ubuntu',
            ip: '10.140.115.118',
            owner: 'Cydval Liu',
            count: 18
        },
        {
            name: 'CNTLD9KBR21',
            product: 'Mosaiq',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.119',
            owner: 'Jimmy Li',
            count: 19
        },
        {
            name: 'CNTLD9KBR22',
            product: 'Monaco',
            installation: 'Default',
            os: 'Windows 8',
            ip: '10.140.115.120',
            owner: 'Jimmy Li',
            count: 20
        },
        {
            name: 'CNTLD9KBR22',
            product: 'Mosaiq',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.121',
            owner: 'Cydval Liu',
            count: 21
        },
        {
            name: 'CNTLD9KBR23',
            product: 'Proton',
            installation: 'Default',
            os: 'Ubuntu',
            ip: '10.140.115.122',
            owner: 'Jimmy Li',
            count: 22
        },
        {
            name: 'CNTLD9KBR24',
            product: 'Monaco',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.123',
            owner: 'Jimmy Li',
            count: 23
        },
        {
            name: 'CNTLD9KBR25',
            product: 'Mosaiq',
            installation: 'Default',
            os: 'Windows 10',
            ip: '10.140.115.124',
            owner: 'Jimmy Li',
            count: 24
        },
    ];

    getAll(): Observable<Vm[]> {
        return observableOf(this.VMData);
    }

    getAllWithOutObservable(): Vm[] {
        return this.VMData;
    }
}
