import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Voyages', url: 'list-travel', icon: 'airplane-outline' },
    { title: 'Calendrier', url: '/calendar', icon: 'calendar-outline' },

  ];

  constructor() {}
}
