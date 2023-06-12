import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthorizationComponent } from "./authorization.component";
import { AuthorizationRoutingModule } from "./authorization-routing.module";

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthorizationComponent,
  ],
  imports: [
    BrowserModule,
    AuthorizationRoutingModule,
  ],
  exports: [],
  providers: []
})
export class AuthorizationModule { }
