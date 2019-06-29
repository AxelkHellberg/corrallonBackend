import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { Ronda } from "./Ronda";
import { HistorialEstadoFalla } from "./HistorialEstadoFalla";
@Entity()
export class EstadoFalla extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    posicion: number = null;

    @OneToMany(type => HistorialEstadoFalla, historialEstadoFalla => historialEstadoFalla.estadoFalla)
    public historialEstadosFallas: HistorialEstadoFalla[];



    @BeforeInsert()
    private validateInsert(): void {
        if (this.nombre == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
    }
}
