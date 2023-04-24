import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { IonicModule } from '@ionic/angular';
import { DateBrPipe } from './pipes/date-br/date-br.pipe';

@NgModule({
  declarations: [
    DateBrPipe
  ],
  imports: [
    CommonModule,
    PoModule,
  ],
  exports: [
    PoModule,
    IonicModule,
    DateBrPipe
  ]
})
export class SharedModule { }
