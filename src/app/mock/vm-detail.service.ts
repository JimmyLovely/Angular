import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';

// Model
import { IVmDetail } from '../model/vm-detail';

// Service
import { IVmDetailService } from '../service/i-vm-detail.service';

@Injectable({
    providedIn: 'root'
})
export class VmDetailService extends IVmDetailService {
    constructor(
    ) {
        super();
    }

    private VMData = [
        {
            name: 'CNTLD9KBR01',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.101',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR02',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.102',
            owner: 'Cydval Liu'
        },
        {
            name: 'CNTLD9KBR03',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.102',
            owner: 'Cydval Liu'
        },
        {
            name: 'CNTLD9KBR04',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.103',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR05',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.104',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR06',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.105',
            owner: 'Cydval Liu'
        },
        {
            name: 'CNTLD9KBR07',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.104',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR08',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.106',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR09',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.107',
            owner: 'Cydval Liu'
        },
        {
            name: 'CNTLD9KBR10',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.108',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR11',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.109',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR12',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.110',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR13',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.111',
            owner: 'Cydval Liu'
        },
        {
            name: 'CNTLD9KBR14',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.112',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR15',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.113',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR16',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.114',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR17',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.115',
            owner: 'Cydval Liu'
        },
        {
            name: 'CNTLD9KBR18',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.116',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR19',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.117',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR20',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.118',
            owner: 'Cydval Liu'
        },
        {
            name: 'CNTLD9KBR21',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.119',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR22',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.120',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR22',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.121',
            owner: 'Cydval Liu'
        },
        {
            name: 'CNTLD9KBR23',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.122',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR24',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.123',
            owner: 'Jimmy Li'
        },
        {
            name: 'CNTLD9KBR25',
            productInfo: [{
                'name': 'Monaco',
                'version': '6.0.0'
            }, {
                'name': 'Mosaiq',
                'version': '3.0.0'
            }],
            installation: 'Default',
            systemInfo:
            {
                cpu: 8,
                memory: 8192,
                os: 'Microsoft Windows Server 2008 R2 (64-bit)',
                power: 'poweredOn'
            },
            ip: '10.140.115.124',
            owner: 'Jimmy Li'
        },
    ];

    getAll(): Observable<IVmDetail[]> {
        return observableOf(this.VMData);
    }
}
