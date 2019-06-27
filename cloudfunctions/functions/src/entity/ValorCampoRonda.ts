import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { PermissionWS } from "./PermissionWS";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { CampoManiobra } from "./CampoManiobra";
import { GuiaManiobra } from "./GuiaManiobra";
import { Ronda } from "./Ronda";
import { CampoRonda } from "./CampoRonda";
@Entity()
export class ValorCampoRonda extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valor: string;

    @Column()
    valorNormal: string;

    @Column()
    rondaId: number;

    @ManyToOne(type => Ronda, ronda => ronda.valoresCamposRonda)
    @JoinColumn({ name: "rondaId" })
    @Index()
    public ronda: Ronda

    @Column()
    campoRondaId: number;

    @ManyToOne(type => CampoRonda, campoRonda => campoRonda.valoresCamposRonda)
    @JoinColumn({ name: "campoRondaId" })
    @Index()
    public campoRonda: CampoRonda


    @BeforeInsert()
    private validateInsert(): void {
        if (this.valor == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
        if (this.campoRondaId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("campoRondaId"), Msg.CAMPO_OBLIGATORIO("campoRondaId"), 400)
        if (this.rondaId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("rondaId"), Msg.CAMPO_OBLIGATORIO("rondaId"), 400)
    }
}
