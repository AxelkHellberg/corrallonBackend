import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { Planta } from '../entity/Planta';
import { Equipamiento } from '../entity/Equipamiento';
import { EstadoFalla } from '../entity/EstadoFalla';
/************CONFIG CLASS**************** */
const myClass = EstadoFalla
/**************************************** */

export class EstadoFallaRepository/**config */ extends GenericRepository<EstadoFalla/**config */>{
    public getRepository(): Repository<EstadoFalla/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}