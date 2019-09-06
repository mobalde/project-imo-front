import { ImoResponse } from 'src/app/models/response/imo-response';

/**
 * interface gestion utilisateur
 */
interface IUser <T> {
    /** creation compte utilisateur [client | prometteur] */
    creationCompte(object: T): ImoResponse<T>;
}
