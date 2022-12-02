import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, DatetimeCustomEvent, ModalController } from '@ionic/angular';
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

  travels = JSON.parse(localStorage.getItem('allTravel') as string);

  constructor(private modalCtrl: ModalController, private router: Router, private travelservice: TravelService, private route: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() { }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      let travel: Travel = {
        id: `travel-${data}`,
        name: `${data}`,
      };

      this.travelservice.save(travel);
      this.router.navigate(['detail-travel', travel.id]);
      this.travels = JSON.parse(localStorage.getItem('allTravel') as string);

    }
  }

  detailsTravel(id: string) {
    this.router.navigate(['detail-travel', id]);
  }

  share(travel: Travel) {

    let travelDetails = JSON.parse(localStorage.getItem('myTravelDetails' + travel.id) as string);

    console.log(travelDetails);
    
    if (travelDetails !== null) {
      let txt: any;
      travelDetails.forEach(function (value: any) {
        txt = `
        date : ${value.date} 
        Voici le depart : ${value.departure}
        Voici l'arrivée : ${value.arrival}
        regarde : ${value.coordinates}
        `;
      });

      let options: ShareOptions = {
        title: 'Voici mes voyages',
        text: txt,
        url: 'http://myapp',
        dialogTitle: txt,
      }
      Share.share(options);
    }else {
    this.presentAlert();
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Attention',
      subHeader: "Il y a pas d'étapes",
      message: "Vous devez ajouter des étapes pour envoyer" ,
      buttons: ['OK'],
    });
  
    await alert.present();
  }

}

function parseISO(value: string | string[] | null | undefined): any {
}
