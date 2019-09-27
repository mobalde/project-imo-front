import { ImoResponse } from '../../../models/response/imo-response';
import { Observable } from 'rxjs';

/**
 * interface gestion utilisateur
 */
export interface IUser <T, D> {

    /**
     *
     * @author Mamadou
     * @description creation compte utilisateur professionnel
     * @param object user moral
     *
     */
    creationProfessionnel(object: T): Observable<ImoResponse<T>>;

    /**
     *
     * @author Mamadou
     * @description creation compte utilisateur physique
     * @param object user physique
     *
     */
    creationParticulier(object: D): Observable<ImoResponse<D>>;
}
