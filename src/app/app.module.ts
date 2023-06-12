import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthorizationModule } from "./authorization/authorization.module";
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from "./pages/pages.module";
import { SwiperModule } from "swiper/angular";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, // работа с браузером
    FormsModule, // работа с формами
    ReactiveFormsModule, // работа с реактивными формами
    HttpClientModule, // модуль взаимодействия с сервером
    AppRoutingModule, // модуль маршрутизации
    AuthorizationModule, // модуль авторизации
    PagesModule, // модуль всех страниц
    SwiperModule,
  ],
  bootstrap: [AppComponent],
  providers: [], // Services
  exports: []
})
export class AppModule { }
