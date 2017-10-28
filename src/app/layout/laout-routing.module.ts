import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { WaxingComponent } from "./waxing/waxing.component";
import { ThreadingComponent } from "./threading/threading.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'waxing', component: WaxingComponent },
            { path: 'threading', component: ThreadingComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
           
        ] },
   

];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LaoutRoutingModule { }
