import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalWayPage } from './modal-way.page';

const routes: Routes = [
  {
    path: '',
    component: ModalWayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalWayPageRoutingModule {}
