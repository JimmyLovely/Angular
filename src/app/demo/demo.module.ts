import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule, DemoComponents } from './demo-routing.module';


import { IVmService } from '../service/i-vm.service';
import { VmMockService } from '../mock/vm.service';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { MachineNameRenderComponent } from './machine-name-render/machine-name-render.component';

@NgModule({
  declarations: [
    ...DemoComponents,
    MachineNameRenderComponent
  ],
  entryComponents: [
    MachineNameRenderComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    DemoRoutingModule
  ],
  providers: [
    {
      provide: IVmService,
      useClass: VmMockService
    }
  ],
})
export class DemoModule { }
