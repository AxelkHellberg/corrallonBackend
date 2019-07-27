import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { FallaEquipamiento } from '../entity/FallaEquipamiento';
/************CONFIG CLASS**************** */
const myClass = FallaEquipamiento
/**************************************** */

export class FallaEquipamientoRepository/**config */ extends GenericRepository<FallaEquipamiento/**config */>{
    public getRepository(): Repository<FallaEquipamiento/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}