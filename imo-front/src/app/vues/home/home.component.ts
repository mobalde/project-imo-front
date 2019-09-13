import { TYPES_DEMANDES } from './../../constantes/constantesDatas';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormControl} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public typesDemandes: string[];
  date = new FormControl(new Date());

  serializedDate = new FormControl((new Date()).toISOString());

  constructor() {
  }

  ngOnInit() {
    this.initDatePicker();
    this.typesDemandes = TYPES_DEMANDES;
  }

  ngAfterViewInit() {
    this.initSelect();
  }

  public initDatePicker() {
    $('.datepicker').datepicker({
      format: 'dd/mm/yyyy'
    });
  }

  public initSelect() {
    $('.mdb-select').formSelect();
  }

}
