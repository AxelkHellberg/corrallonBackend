import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn, Timestamp } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { PermissionWS } from "./PermissionWS";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/Msg";
import { CampoManiobra } from "./CampoManiobra";
import { GuiaManiobra } from "./GuiaManiobra";
import { CampoRonda } from "./CampoRonda";
import { Ronda } from "./Ronda";
@Entity()
export class PlantillaRonda extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    funcionamientoSistema: boolean = true;

    @Column()
    obligatorioSistema: boolean = false;

    @Column()
    funcionamientoEquipo: boolean = true;

    @Column()
    obligatorioEquipo: boolean = false;

    @Column({ type: "simple-json" })
    public horarios: JSON

    @OneToMany(type => Ronda, ronda => ronda.plantillaRonda)
    public rondas: Ronda[]

    @BeforeInsert()
    private validateInsert(): void {
        if (this.nombre == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
    }
}
