import { ErrorsFormGeneriquesService } from './../../errors/errors-form-generiques.service';
import { Component, OnInit } from '@angular/core';
import { CHAMPS_FORM_INSCRIPTION } from '../../constantes/constantes-structures';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.scss']
})
export class UserInscriptionComponent implements OnInit {

  constructor(private errors: ErrorsFormGeneriquesService) { }

  ngOnInit() {
  }

  valider() {
    this.errors.generateErrorsForm(CHAMPS_FORM_INSCRIPTION, 'form-inscription', 'class');
  }

}
