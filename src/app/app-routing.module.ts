import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';


const routes: Routes = [
    { path: 'welcome', loadChildren: './layout/layout.module#LayoutModule' },
   
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
