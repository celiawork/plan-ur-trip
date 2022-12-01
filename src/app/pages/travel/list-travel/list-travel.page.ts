import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/modals/modal/modal.page';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';
import { Share, ShareOptions } from '@capacitor/share';


@Component({
  selector: 'app-list-travel',
  templateUrl: './list-travel.page.html',
  styleUrls: ['./list-travel.page.scss'],
})
export class ListTravelPage implements OnInit {

  condition: boolean = false;
    
  travels = JSON.parse(localStorage.getItem('allTravel') as string);

  constructor(private modalCtrl: ModalController, private router: Router, private travelservice: TravelService) { }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.condition = true;
      let  travel : Travel  = {
        id:`travel-${data}`,
        name: `${data}`,
      };

      this.travelservice.save(travel);
      this.router.navigate(['detail-travel', travel.id]);
    
    }
  }

  detailsTravel(id:string) {
    this.router.navigate(['detail-travel', id]);
  }

  share() {
    let options:ShareOptions={

      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    }

    Share.share(options);
  }
}
