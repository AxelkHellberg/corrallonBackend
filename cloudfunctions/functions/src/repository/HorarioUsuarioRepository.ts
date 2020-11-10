import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Sistema } from '../entity/Sistema';
import { PlantillaGuiaManiobra } from '../entity/PlantillaGuiaManiobra';
import { CampoManiobra } from '../entity/CampoManiobra';
import { CampoRondaPlantillaRonda } from '../entity/CampoRondaPlantillaRonda';
import { HorarioPersona } from '../entity/HorarioPersona';

/************CONFIG CLASS**************** */
const myClass = HorarioPersona
/**************************************** */

export class HorarioUsuarioRepository/**config */ extends GenericRepository<HorarioPersona/**config */>{
    public getRepository(): Repository<HorarioPersona/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }

}