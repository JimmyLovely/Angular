import { Component, OnInit } from '@angular/core';

// 3rd
import { ColDef, GridOptions, RowEvent, AgGridEvent } from 'ag-grid-community';

// Model
import { ISimpleObject } from '../../model/simple-object';

@Component({
    selector: 'app-ag-grid-demo',
    templateUrl: './ag-grid-demo.component.html',
    styleUrls: ['./ag-grid-demo.component.scss']
})
export class AgGridDemoComponent implements OnInit {

    simpleData: ISimpleObject[] = [];

    gridOptions: GridOptions = {
        defaultColDef: {
            filter: true,
        },
        suppressCellFocus: true,
    };

    columnDefs: ColDef[] = [
        {
            field: 'name',
        },
        {
            field: 'age',
        },
        {
            field: 'isEnabled',
        },
    ];

    constructor() { }

    ngOnInit(): void {
        this.initializeMockData();
    }

    onRowClicked(event: RowEvent) {
        event.node.setSelected(true);
    }

    onRowDataChanged(event: AgGridEvent) {
        event.api.getSelectedNodes().forEach(x => {
            window.console.log(x);
        })
    }

    private initializeMockData() {
        this.simpleData = [
            {
                name: '1',
                age: 1,
                isEnabled: true,
            },
            {
                name: '2',
                age: 2,
                isEnabled: true,
            },
            {
                name: '3',
                age: 3,
                isEnabled: true,
            },
            {
                name: '4',
                age: 4,
                isEnabled: true,
            },
            {
                name: '5',
                age: 5,
                isEnabled: true,
            },
        ];
    }

}
