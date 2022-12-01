import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public appPages = [
    { title: 'Voyages', url: '/travel/list-travel', icon: 'airplane-outline' },
    { title: 'Calendrier', url: '/calendar', icon: 'calendar-outline' },

  ];

  constructor() { }

  ngOnInit() {
  }

}
