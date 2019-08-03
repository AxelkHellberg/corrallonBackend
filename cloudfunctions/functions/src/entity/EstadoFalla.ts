import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, BeforeRemove } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { Ronda } from "./Ronda";
import { HistorialEstadoFalla } from "./HistorialEstadoFalla";
import { NotificacionFalla } from "./NotificacionFalla";

@Entity()
export class EstadoFalla extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    posicion: number = null;

    @Column({ nullable: true })
    color: string = null;

    @OneToMany(type => HistorialEstadoFalla, historialEstadoFalla => historialEstadoFalla.estadoFalla)
    public historialEstadosFallas: HistorialEstadoFalla[];

    @OneToMany(type => NotificacionFalla, notificacionFalla => notificacionFalla.estadoFalla)
    public notificacionesFalla: NotificacionFalla[];

    @BeforeInsert()
    private validateInsert(): void {
        if (this.nombre == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
    }

    @BeforeRemove()
    private validateRemove(): void {
        if (this.id == 1 || this.id == 2)
            throw new ErrorVDF(Msg.ESTADOS_FALLA_NO_BORRABLES, Msg.ESTADOS_FALLA_NO_BORRABLES, 400)
    }

}
