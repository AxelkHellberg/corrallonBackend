import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Sistema } from '../entity/Sistema';
import { PlantillaGuiaManiobra } from '../entity/PlantillaGuiaManiobra';
import { CampoManiobra } from '../entity/CampoManiobra';
import { GuiaManiobra } from '../entity/GuiaManiobra';

/************CONFIG CLASS**************** */
const myClass = GuiaManiobra
/**************************************** */

export class GuiaManiobraRepository/**config */ extends GenericRepository<GuiaManiobra/**config */>{
    public getRepository(): Repository<GuiaManiobra/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}