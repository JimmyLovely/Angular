import { Component, OnInit } from '@angular/core';

import { IVmService } from "../../service/i-vm.service";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(
    private vmService: IVmService
  ) { }

  ngOnInit(): void {
  }

}
