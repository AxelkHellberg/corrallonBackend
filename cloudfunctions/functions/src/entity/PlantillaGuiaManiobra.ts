import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { PermissionWS } from "./PermissionWS";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { CampoManiobra } from "./CampoManiobra";
import { GuiaManiobra } from "./GuiaManiobra";
@Entity()
export class PlantillaGuiaManiobra extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(type => CampoManiobra, campoManiobra => campoManiobra.plantillaGuiaManiobra)
    public camposManiobras: CampoManiobra[]


    @OneToMany(type => GuiaManiobra, guiaManiobra => guiaManiobra.plantillaGuiaManiobra)
    public guiasManiobras: GuiaManiobra[]

    @BeforeInsert()
    private validateInsert(): void {
        if (this.nombre == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
    }
}
