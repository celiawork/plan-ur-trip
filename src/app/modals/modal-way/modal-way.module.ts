import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalWayPageRoutingModule } from './modal-way-routing.module';

import { ModalWayPage } from './modal-way.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalWayPageRoutingModule
  ],
  declarations: [ModalWayPage]
})
export class ModalWayPageModule {}
