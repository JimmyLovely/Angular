import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// i18n
import { registerLocaleData } from "@angular/common";
import localefr from "@angular/common/locales/fr-CA";
import localezh from "@angular/common/locales/zh";

registerLocaleData(localefr);
registerLocaleData(localezh);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
