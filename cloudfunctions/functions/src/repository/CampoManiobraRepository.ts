import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Sistema } from '../entity/Sistema';
import { PlantillaGuiaManiobra } from '../entity/PlantillaGuiaManiobra';
import { CampoManiobra } from '../entity/CampoManiobra';

/************CONFIG CLASS**************** */
const myClass = CampoManiobra
/**************************************** */

export class CampoManiobraRepository/**config */ extends GenericRepository<CampoManiobra/**config */>{
    public getRepository(): Repository<CampoManiobra/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}