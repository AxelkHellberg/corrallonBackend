import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Sistema } from '../entity/Sistema';

/************CONFIG CLASS**************** */
const myClass = Sistema
/**************************************** */

export class SistemaRepository/**config */ extends GenericRepository<Sistema/**config */>{
    public getRepository(): Repository<Sistema/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}