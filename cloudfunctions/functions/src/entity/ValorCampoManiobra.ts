import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { PermissionWS } from "./PermissionWS";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { CampoManiobra } from "./CampoManiobra";
import { GuiaManiobra } from "./GuiaManiobra";
@Entity()
export class ValorCampoManiobra extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valor: boolean;

    @Column()
    valorNormal: boolean;

    @Column()
    guiaManiobraId: number;

    @ManyToOne(type => GuiaManiobra, guiaManiobra => guiaManiobra.valoresCamposManiobras)
    @JoinColumn({ name: "guiaManiobraId" })
    @Index()
    public guiaManiobra: GuiaManiobra


    @Column()
    campoManiobraId: number;

    @ManyToOne(type => CampoManiobra, campoManiobra => campoManiobra.valoresCamposManiobras)
    @JoinColumn({ name: "campoManiobraId" })
    @Index()
    public campoManiobra: CampoManiobra

    @BeforeInsert()
    private validateInsert(): void {
        if (this.valor == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
        if (this.guiaManiobraId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("guiaManiobraId"), Msg.CAMPO_OBLIGATORIO("guiaManiobraId"), 400)
        if (this.campoManiobraId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("campoManiobraId"), Msg.CAMPO_OBLIGATORIO("campoManiobraId"), 400)
    }
}
