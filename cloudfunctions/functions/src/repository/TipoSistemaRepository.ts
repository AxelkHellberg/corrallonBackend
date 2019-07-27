import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { TipoSistema } from '../entity/TipoSistema';
/************CONFIG CLASS**************** */
const myClass = TipoSistema
/**************************************** */

export class TipoSistemaRepository/**config */ extends GenericRepository<TipoSistema/**config */>{
    public getRepository(): Repository<TipoSistema/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}