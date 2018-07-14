import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { WaxingComponent } from "./waxing/waxing.component";
import { ThreadingComponent } from "./threading/threading.component";
import { FacialComponent } from "./facial/facial.component";
import { MakeupComponent } from "./makeup/makeup.component";
import { HandComponent } from "./hand/hand.component";
import { HairComponent } from "./hair/hair.component";
import { LaserComponent } from "./laser/laser.component";
import { HomeComponent } from "./home/home.component";
import { MassageComponent } from "./massage/massage.component";
import { DermalogicaComponent } from "./dermalogica/dermalogica.component";

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'waxing', component: WaxingComponent },
            { path: 'threading', component: ThreadingComponent },
            { path: 'facial', component: FacialComponent },
            { path: 'makeup', component: MakeupComponent },
            { path: 'hand', component: HandComponent },
            { path: 'hair', component: HairComponent },
            { path: 'laser', component: LaserComponent },
            { path: 'massage', component: MassageComponent },
            { path: 'dermalogica', component: DermalogicaComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
           
        ] },
   

];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LaoutRoutingModule { }
