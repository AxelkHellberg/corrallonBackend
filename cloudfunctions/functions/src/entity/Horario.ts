import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { PlantillaRonda } from "./PlantillaRonda";
@Entity()
export class Horario extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hora: number;

    @Column()
    minuto: number;


    @OneToMany(type => PlantillaRonda, plantillaRonda => plantillaRonda.horario)
    public plantillasRonda: PlantillaRonda[]

    @BeforeInsert()
    private validateInsert(): void {
        if (this.hora == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("hora"), Msg.CAMPO_OBLIGATORIO("hora"), 400)
        if (this.minuto == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("minuto"), Msg.CAMPO_OBLIGATORIO("minuto"), 400)
    }
}
