import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Sistema } from '../entity/Sistema';
import { PlantillaGuiaManiobra } from '../entity/PlantillaGuiaManiobra';
import { PlantillaRonda } from '../entity/PlantillaRonda';

/************CONFIG CLASS**************** */
const myClass = PlantillaRonda
/**************************************** */

export class PlantillaRondaRepository/**config */ extends GenericRepository<PlantillaRonda/**config */>{
    public getRepository(): Repository<PlantillaRonda/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}