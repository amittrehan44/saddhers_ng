import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { FooterComponent } from '../shared/component/footer/footer.component';
import { AppModule } from "../app.module";
import { ContactComponent } from './contact/contact.component';
import { WaxingComponent } from './waxing/waxing.component';
import { ThreadingComponent } from './threading/threading.component';
import { LaoutRoutingModule } from './/laout-routing.module';
import { HomeComponent } from './home/home.component';
import { LaserComponent } from './laser/laser.component';
import { FacialComponent } from './facial/facial.component';
import { MakeupComponent } from './makeup/makeup.component';
import { HandComponent } from './hand/hand.component';
import { HairComponent } from './hair/hair.component';
import { MassageComponent } from './massage/massage.component';



@NgModule({
    imports: [
       
        CommonModule,
       
        LaoutRoutingModule
  ],
  declarations: [
      LayoutComponent,
      HeaderComponent,
      FooterComponent,
      ContactComponent,
      WaxingComponent,
      ThreadingComponent,
      HomeComponent,
      LaserComponent,
      FacialComponent,
      MakeupComponent,
      HandComponent,
      HairComponent,
      MassageComponent
      
  ],

 
})
export class LayoutModule { }
