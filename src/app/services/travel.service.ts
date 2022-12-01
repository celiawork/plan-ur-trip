import { Injectable } from '@angular/core';
import { DetailTravel, Travel } from '../models/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

private travels: Travel[];
private detailsTravels : DetailTravel[];


  constructor() {
    this.travels = []
    this.detailsTravels = []
  }

  getAll() {

  }

  getOne(id:string) {
    return this.travels.find((travel) => travel.id === id);
  }

  save(travel: Travel) {
    this.travels.push(travel);
    localStorage.setItem('myTravel'+travel.id, JSON.stringify(travel));
    localStorage.setItem('allTravel', JSON.stringify(this.travels));
    console.log("nouveau séjour" + this.travels);

  }

  update(travelD: DetailTravel, key:string | null) {

    this.detailsTravels.push(travelD);
    localStorage.setItem('myTravelDetails'+key, JSON.stringify(this.detailsTravels));
    console.log(this.detailsTravels);
    
  }
}

