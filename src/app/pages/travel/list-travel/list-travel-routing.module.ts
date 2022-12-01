import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTravelPage } from './list-travel.page';




const routes: Routes = [
  {
    path: '',
    component: ListTravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTravelPageRoutingModule {}
