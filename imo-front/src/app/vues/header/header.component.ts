import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initNavBar(); // initialisation de la navbar
  }

  /**
   * @author Mamadou
   * @description initialise la barre de navigation du header (responsive)
   */
  initNavBar() {
    $('.sidenav').sidenav();
  }

}
