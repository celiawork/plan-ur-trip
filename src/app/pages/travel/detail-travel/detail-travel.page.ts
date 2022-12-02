import { Component, OnInit } from '@angular/core';
import { DetachedRouteHandle, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalWayPage } from 'src/app/modals/modal-way/modal-way.page';
import { ModalPage } from 'src/app/modals/modal/modal.page';
import { DetailTravel, Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';
import { ActivatedRoute } from "@angular/router";
import { Geolocation, Position } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-detail-travel',
  templateUrl: './detail-travel.page.html',
  styleUrls: ['./detail-travel.page.scss'],
})
export class DetailTravelPage implements OnInit {

  optionsLocation: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 2
  }

  coordinates!: NativeGeocoderResult;
  traveltest = JSON.parse(localStorage.getItem('myTravel' + this.route.snapshot.paramMap.get('id')) as string);
  travelDetails = JSON.parse(localStorage.getItem('myTravelDetails' + this.route.snapshot.paramMap.get('id')) as string);

  travels:Travel[];

  constructor(private modalCtrl: ModalController, private router: Router, private servicetravel: TravelService, private route: ActivatedRoute, private nativeGeocoder: NativeGeocoder) { 
    this.travels = []
  }

  ngOnInit() {}

  async openFormWay() {
    const modal = await this.modalCtrl.create({
      component: ModalWayPage,
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      let key = this.route.snapshot.paramMap.get('id')
      this.servicetravel.update(data, key);
   
      this.travelDetails = JSON.parse(localStorage.getItem('myTravelDetails' + key) as string);
    }
  }

  async geoLocalise(item: DetailTravel) {
    const location = await Geolocation.getCurrentPosition();
    this.nativeGeocoder.reverseGeocode(location.coords.latitude, location.coords.longitude, this.optionsLocation).then((result: NativeGeocoderResult[]) => {
      item.coordinates = result[0];
      this.coordinates = item.coordinates;
    })
  }

  async openMap() {
    await Browser.open({
      url:
        `https://www.google.com/maps/search/?api=1&query=${this.coordinates.latitude}%2C${this.coordinates.longitude}`
    });
  }
}
