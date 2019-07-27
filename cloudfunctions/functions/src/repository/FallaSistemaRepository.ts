import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { FallaSistema } from '../entity/FallaSistema';
/************CONFIG CLASS**************** */
const myClass = FallaSistema
/**************************************** */

export class FallaSistemaRepository/**config */ extends GenericRepository<FallaSistema/**config */>{
    public getRepository(): Repository<FallaSistema/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}