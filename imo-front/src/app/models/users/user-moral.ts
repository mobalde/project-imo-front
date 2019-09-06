import { Adresse } from './../adresse';
import { User } from './user';
import { RepresentantLegal } from '../representant-legal';
export class UserMoral extends User {
    /** adresse */
    public adresse: Adresse;

    /** kbis */
    public kbis: string;

    /** raison social */
    public raisonSocial: string ;

    /** representant legal */
    public representantLegal: RepresentantLegal;

    /** siret */
    public siret: string;

    /** type promoteur */
    public typePromoteur: string;
}
