import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {AppComponent} from "./app.component";
import {PanelComponent} from "./panel/panel.component";

const routes: Routes = [
  { path : "" , component : AppComponent },
  { path : "auth" , component : AuthComponent },
  { path : "Panel" , component : PanelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
