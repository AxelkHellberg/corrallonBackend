import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { TipoTag } from '../entity/TipoTag';
/************CONFIG CLASS**************** */
const myClass = TipoTag
/**************************************** */

export class TipoTagRepository/**config */ extends GenericRepository<TipoTag/**config */>{
    public getRepository(): Repository<TipoTag/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}