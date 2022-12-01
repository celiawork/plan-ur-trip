import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTravelPage } from './detail-travel.page';

const routes: Routes = [
  {
    path: ':id',
    component: DetailTravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTravelPageRoutingModule {}
