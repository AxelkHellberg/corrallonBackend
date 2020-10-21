import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Sistema } from '../entity/Sistema';
import { PlantillaGuiaManiobra } from '../entity/PlantillaGuiaManiobra';
import { CampoManiobra } from '../entity/CampoManiobra';
import { CampoRondaPlantillaRonda } from '../entity/CampoRondaPlantillaRonda';

/************CONFIG CLASS**************** */
const myClass = CampoRondaPlantillaRonda
/**************************************** */

export class CampoRondaPlantillaRondaRepository/**config */ extends GenericRepository<CampoRondaPlantillaRonda/**config */>{
    public getRepository(): Repository<CampoRondaPlantillaRonda/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }

}