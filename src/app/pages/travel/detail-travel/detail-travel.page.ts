import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalWayPage } from 'src/app/modals/modal-way/modal-way.page';
import { ModalPage } from 'src/app/modals/modal/modal.page';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail-travel',
  templateUrl: './detail-travel.page.html',
  styleUrls: ['./detail-travel.page.scss'],
})
export class DetailTravelPage implements OnInit {


  traveltest = JSON.parse(localStorage.getItem('myTravel'+ this.route.snapshot.paramMap.get('id')) as string);
  
  travelDetails = JSON.parse(localStorage.getItem('myTravelDetails'+ this.route.snapshot.paramMap.get('id')) as string);

  condition:boolean = false;

  constructor(private modalCtrl: ModalController, private router: Router, private servicetravel: TravelService, private route: ActivatedRoute) { }


  ngOnInit() {
  }

  async openFormWay() {

      const modal = await this.modalCtrl.create({
        component: ModalWayPage,
      });
      modal.present();
  
      const { data, role } = await modal.onWillDismiss();
  
      
      if (role === 'confirm') {

        let key = this.route.snapshot.paramMap.get('id')
        this.servicetravel.update(data, key);
        this.condition = true;
 
       
        
      }
    
  }

}
