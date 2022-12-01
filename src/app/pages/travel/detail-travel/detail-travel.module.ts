import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTravelPageRoutingModule } from './detail-travel-routing.module';

import { DetailTravelPage } from './detail-travel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTravelPageRoutingModule
  ],
  declarations: [DetailTravelPage]
})
export class DetailTravelPageModule {}
