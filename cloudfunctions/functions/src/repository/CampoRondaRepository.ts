import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Sistema } from '../entity/Sistema';
import { PlantillaGuiaManiobra } from '../entity/PlantillaGuiaManiobra';
import { CampoManiobra } from '../entity/CampoManiobra';
import { CampoRonda } from '../entity/CampoRonda';

/************CONFIG CLASS**************** */
const myClass = CampoRonda
/**************************************** */

export class CampoRondaRepository/**config */ extends GenericRepository<CampoRonda/**config */>{
    public getRepository(): Repository<CampoRonda/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}