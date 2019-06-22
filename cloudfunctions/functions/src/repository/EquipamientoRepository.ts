import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { Planta } from '../entity/Planta';
import { Equipamiento } from '../entity/Equipamiento';
/************CONFIG CLASS**************** */
const myClass = Equipamiento
/**************************************** */

export class EquipamientoRepository extends GenericRepository<Equipamiento/**config */>{
    public getRepository(): Repository<Equipamiento/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}