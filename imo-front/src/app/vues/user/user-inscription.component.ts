import { RepresentantLegal } from './../../models/representant-legal';
import { UserPhysique } from './../../models/users/user-physique';
import { UserMoral } from './../../models/users/user-moral';
import { User } from './../../models/users/user';
import { ErrorsFormGeneriquesService } from './../../errors/errors-form-generiques.service';
import { Component, OnInit } from '@angular/core';
import { CHAMPS_FORM_INSCRIPTION } from '../../constantes/constantes-structures';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.scss']
})
export class UserInscriptionComponent implements OnInit {

  isBlocProfessionnel = false;
  user: User;
  professionnel: UserMoral;
  particulier: UserPhysique;
  infoUser: RepresentantLegal;
  result = false;

  constructor(private errors: ErrorsFormGeneriquesService) { }

  ngOnInit() {
  }

  valider() {
    this.result = this.errors.generateErrorsForm(CHAMPS_FORM_INSCRIPTION, 'form-inscription', 'class');
    if ( this.result ) {
      // soumettre le formulaire
      console.log('_________ soumettre');
    }
  }

  /**
   *
   * @author Mamadou
   * @description select bloc professionnel
   * @param type est le type utilisateur
   *
   */
  openform(type: string) {
    this.isBlocProfessionnel = (type === 'professionnel');
  }

}
