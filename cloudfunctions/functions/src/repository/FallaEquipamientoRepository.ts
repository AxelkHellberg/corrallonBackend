import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { Planta } from '../entity/Planta';
import { Equipamiento } from '../entity/Equipamiento';
import { EstadoFalla } from '../entity/EstadoFalla';
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