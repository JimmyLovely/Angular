import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// 3rd
import { LocalDataSource } from 'ng2-smart-table';

// Service
import { IVmService } from '../../service/i-vm.service';

import { MachineNameRenderComponent } from '../machine-name-render/machine-name-render.component';

@Component({
  selector: 'app-smart.table',
  templateUrl: './smart.table.component.html',
  styleUrls: ['./smart.table.component.scss']
})
export class SmartTableComponent implements OnInit {

    constructor(
        private vmService: IVmService,
        private router: Router) {
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
            product: {
                title: 'Product',
                type: 'string',
            },
            installation: {
                title: 'Installation',
                type: 'string',
            },
            os: {
                title: 'OS',
                type: 'string',
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
        this.vmService.getAll().subscribe(
            vmData => this.source.load(vmData)
        );
    }

    onApply(event) {
        window.console.log('onApply');
        this.router.navigate(['/pages/vm/apply']);
    }
}
