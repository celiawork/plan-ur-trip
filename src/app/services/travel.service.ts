import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailTravel, Travel } from '../models/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService implements OnInit {

  private travels: Travel[];
  private detailsTravels: DetailTravel[];

  constructor(private route: ActivatedRoute) {
    this.travels = []
    this.detailsTravels = []
  }

  ngOnInit(): void {
  
    let key = this.route.snapshot.paramMap.get('id')
    const travelDetails = JSON.parse(localStorage.getItem('myTravelDetails' + key) as string);
    this.detailsTravels.push(travelDetails);

  }

  getAll() {
  }

  getOne(id: string) {
    return this.travels.find((travel) => travel.id === id);
  }

  save(travel: Travel) {
    this.travels.push(travel);
    localStorage.setItem('myTravel' + travel.id, JSON.stringify(travel));
    localStorage.setItem('allTravel', JSON.stringify(this.travels));
  }

  update(travelD: DetailTravel, key: string | null) {
    this.detailsTravels.push(travelD);
    localStorage.setItem('myTravelDetails' + key, JSON.stringify(this.detailsTravels));
  }
}

