import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { PagesComponent} from "./pages.component";
import { RouterOutlet} from "@angular/router";
import { PagesRoutingModule} from "./pages-routing.module";
import { HeaderComponent} from "../shared/components/header/header.component";
import { FooterComponent} from "../shared/components/footer/footer.component";
import { MainComponent } from './main/main.component';
import { SidebarComponent } from "../shared/components/sidebar/sidebar.component";
import { SwiperModule } from "swiper/angular";
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
  ],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterOutlet,
      PagesRoutingModule,
      SwiperModule,
      MatExpansionModule,
      BrowserAnimationsModule, // Animation Angular
    ],
  providers: [], // Services
  exports: []
})
export class PagesModule {}
