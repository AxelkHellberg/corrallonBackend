import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Sistema } from "./Sistema";
import { Equipamiento } from "./Equipamiento";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/Msg";
import { CampoRonda } from "./CampoRonda";
@Entity()
export class TipoCampoRonda extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;


    @OneToMany(type => CampoRonda, campoRonda => campoRonda.tipoCampoRonda)
    public camposRonda: CampoRonda[]

    @BeforeInsert()
    private validateInsert(): void {
        if (this.nombre == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
    }
}
