import { Component, OnInit } from '@angular/core';

// 3rd
import { LocalDataSource } from 'ng2-smart-table';

// Service
import { IVmDetailService } from '../../service/i-vm-detail.service';

import { MachineNameRenderComponent } from '../machine-name-render/machine-name-render.component';
import { IProduct } from 'src/app/model/product';

@Component({
    selector: 'app-smart-table-deep-prototype',
    templateUrl: './smart-table-deep-prototype.component.html',
    styleUrls: ['./smart-table-deep-prototype.component.css']
})
export class SmartTableDeepPrototypeComponent implements OnInit {
    constructor(
        private vmDetailService: IVmDetailService
    ) {
        this.refreshData();
    }

    settings = {
        mode: 'external',
        actions: {
            columnTitle: 'Apply',
            position: 'right',
            add: false,
            edit: true,
            delete: false
        },
        // edit: {
        //     editButtonContent: '<i class="ion-plus-circled"></i>'
        // },
        columns: {
            name: {
                title: 'Name',
                type: 'custom',
                renderComponent: MachineNameRenderComponent
            },
            productInfo: {
                title: 'Product',
                type: 'string',
                valuePrepareFunction: (productInfo: IProduct[]) => {
                    return productInfo.map(product => product.name).join(',');
                }
            },
            installation: {
                title: 'Installation',
                type: 'string',
            },
            systemInfo: {
                title: 'OS',
                type: 'string',
                valuePrepareFunction: systemInfo => systemInfo.os
            },
            ip: {
                title: 'IP',
                type: 'string',
            },
            owner: {
                title: 'Owner',
                type: 'string',
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    ngOnInit() {
    }

    refreshData(): void {
        this.vmDetailService.getAll().subscribe(
            vmData => this.source.load(vmData)
        );
    }

    onApply(event) {
        window.console.log('onApply');
    }
}
