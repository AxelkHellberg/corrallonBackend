import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { TipoCampoRonda } from '../entity/TipoCampoRonda';
/************CONFIG CLASS**************** */
const myClass = TipoCampoRonda
/**************************************** */

export class TipoCampoRondaRepository/**config */ extends GenericRepository<TipoCampoRonda/**config */>{
    public getRepository(): Repository<TipoCampoRonda/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}