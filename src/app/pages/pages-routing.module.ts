import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from "./pages.component";
import { MainComponent} from "./main/main.component";

const routes: Routes = [
  {path: 'pages', component: PagesComponent, children:[
    {path: 'main', component: MainComponent },
      //{path: '', component: },
      //{path: '', component: },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
