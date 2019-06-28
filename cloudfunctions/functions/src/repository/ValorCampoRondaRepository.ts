import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Sistema } from '../entity/Sistema';
import { ValorCampoManiobra } from '../entity/ValorCampoManiobra';
import { ValorCampoRonda } from '../entity/ValorCampoRonda';

/************CONFIG CLASS**************** */
const myClass = ValorCampoRonda
/**************************************** */

export class ValorCampoRondaRepository/**config */ extends GenericRepository<ValorCampoRonda/**config */>{
    public getRepository(): Repository<ValorCampoRonda/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}