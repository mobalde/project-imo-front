import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  /**
   * Initialisation champ date en datePicker
   * @author Mamadou
   * @param cible qui definit l'input
   * @param type qui definit si [class ou id]
   *
   */
  public initDatePicker(cible: string, type: string) {
    switch(type) {
      case 'class':
        $('.' + cible).datepicker({
          format: 'dd/mm/yyyy'
        })
        break;
      case 'id':
        $('#' + cible).datepicker({
          format: 'dd/mm/yyyy'
        });
        break;
    }
  }

  /**
   * Initialisation champ select
   * @author Mamadou
   * @param cible qui definit l'input
   * @param type qui definit si [class ou id]
   * 
   */
  public initSelect(cible: string, type: string) {
    switch(type) {
      case 'class':
        $('.' + cible).formSelect();
        break;
      case 'id':
        $('#' + cible).formSelect();
        break;
    }
  }


}
