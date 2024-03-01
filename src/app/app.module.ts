import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { EnterAmountComponent } from './component/enter-amount/enter-amount.component';
import { EnterPinComponent } from './component/enter-pin/enter-pin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './component/pop-up/pop-up.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { AccountComponent } from './component/account/account.component';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    EnterAmountComponent,
    EnterPinComponent,
    PopUpComponent,
    LandingPageComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
