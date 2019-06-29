import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { Planta } from '../entity/Planta';
import { Equipamiento } from '../entity/Equipamiento';
import { EstadoFalla } from '../entity/EstadoFalla';
import { FallaEquipamiento } from '../entity/FallaEquipamiento';
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