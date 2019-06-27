import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Sistema } from '../entity/Sistema';
import { ValorCampoManiobra } from '../entity/ValorCampoManiobra';

/************CONFIG CLASS**************** */
const myClass = ValorCampoManiobra
/**************************************** */

export class ValorCampoManiobraRepository/**config */ extends GenericRepository<ValorCampoManiobra/**config */>{
    public getRepository(): Repository<ValorCampoManiobra/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}