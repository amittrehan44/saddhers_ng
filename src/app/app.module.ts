import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from "./app-routing.module";


 /*
import { LayoutComponent } from './layout/layout.component';

import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
*/
@NgModule({
  declarations: [
      AppComponent,
     
      
  ],
  imports: [
      BrowserModule,
      AngularFontAwesomeModule,
      LayoutModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
