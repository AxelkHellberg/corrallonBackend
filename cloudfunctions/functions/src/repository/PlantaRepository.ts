import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { Planta } from '../entity/Planta';
/************CONFIG CLASS**************** */
const myClass = Planta
/**************************************** */

export class PlantaRepository extends GenericRepository<Planta/**config */>{
    public getRepository(): Repository<Planta/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}