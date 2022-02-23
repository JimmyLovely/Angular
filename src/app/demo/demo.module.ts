import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// 3rd
import { Ng2SmartTableModule } from "ng2-smart-table";

// Module
import { DemoRoutingModule, DemoComponents } from './demo-routing.module';

// Component
import { MachineNameRenderComponent } from './machine-name-render/machine-name-render.component';
import { SmartTableDeepPrototypeComponent } from './smart-table-deep-prototype/smart-table-deep-prototype.component';

// Service
import { IVmService } from '../service/i-vm.service';
import { VmMockService } from '../mock/vm.service';
import { IVmDetailService } from '../service/i-vm-detail.service';
import { VmDetailService } from '../mock/vm-detail.service';

@NgModule({
  declarations: [
    ...DemoComponents,
    MachineNameRenderComponent,
    SmartTableDeepPrototypeComponent
  ],
  entryComponents: [
    MachineNameRenderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    DemoRoutingModule
  ],
  providers: [
    {
      provide: IVmService,
      useClass: VmMockService
    },{
      provide: IVmDetailService,
      useClass: VmDetailService
    }
  ],
})
export class DemoModule { }
