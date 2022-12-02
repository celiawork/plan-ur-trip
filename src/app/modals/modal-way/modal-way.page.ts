import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailTravel, Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-modal-way',
  templateUrl: './modal-way.page.html',
  styleUrls: ['./modal-way.page.scss'],
})
export class ModalWayPage  {

  departure!: string;
  timedeparture!:string;
  arrival!:string;
  traveltime!:string;
  transport!:string;
  date!: Date;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }



  confirm() {

    let data : DetailTravel = {

      departure: this.departure,
      timedeparture: this.timedeparture,
      traveltime: this.traveltime,
      arrival: this.arrival,
      date: this.date
    };
    
    return this.modalCtrl.dismiss(data, 'confirm');
  }

}
