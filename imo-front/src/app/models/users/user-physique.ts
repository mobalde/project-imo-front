import { Adresse } from './../adresse';
import { User } from './user';
import { RepresentantLegal } from '../representant-legal';
export class UserPhysique extends User {
    /** adresse */
    public adresse: Adresse;

    /** representant legal */
    public representantLegal: RepresentantLegal;

    /** sexe */
    public sexe: string;
}
