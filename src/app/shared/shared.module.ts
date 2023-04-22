import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoModule,
  ],
  exports: [
    PoModule,
    IonicModule
  ]
})
export class SharedModule { }
