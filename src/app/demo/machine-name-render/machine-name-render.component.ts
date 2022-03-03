import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from "ng2-smart-table";

@Component({
  selector: 'app-machine-name-render',
  templateUrl: './machine-name-render.component.html',
  styleUrls: ['./machine-name-render.component.scss']
})
export class MachineNameRenderComponent implements ViewCell, OnInit {
  @Input() value: string | number;
  @Input() rowData: any;

  renderValue: string;

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  OnClick() {
    console.log('click');
  }

}
