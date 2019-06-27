import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Sistema } from '../entity/Sistema';
import { PlantillaGuiaManiobra } from '../entity/PlantillaGuiaManiobra';

/************CONFIG CLASS**************** */
const myClass = PlantillaGuiaManiobra
/**************************************** */

export class PlantillaGuiaManiobraRepository/**config */ extends GenericRepository<PlantillaGuiaManiobra/**config */>{
    public getRepository(): Repository<PlantillaGuiaManiobra/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}