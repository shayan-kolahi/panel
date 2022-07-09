import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './panel/header/header.component';
import { FooterComponent } from './panel/footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import {MatTabsModule} from '@angular/material/tabs';
import {AngularToastifyModule, ToastService} from "angular-toastify";
import {FormsModule} from "@angular/forms";
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularToastifyModule,
    FormsModule,
    MatTabsModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
