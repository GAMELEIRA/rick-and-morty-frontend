import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    FeatureModule,
    HttpClientModule
  ],
  exports: [CoreModule, FeatureModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
