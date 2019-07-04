import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { EstadoFalla } from "./EstadoFalla";
import { NotificacionFalla } from "./NotificacionFalla";
@Entity()
export class HistorialEstadoFalla extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    estadoFallaId: number;

    @ManyToOne(type => EstadoFalla, estadoFalla => estadoFalla.historialEstadosFallas)
    @JoinColumn({ name: "estadoFallaId" })
    @Index()
    public estadoFalla: EstadoFalla;

    @Column()
    notificacionFallaId: number;

    @ManyToOne(type => NotificacionFalla, notificacionFalla => notificacionFalla.historialEstadosFallas)
    @JoinColumn({ name: "notificacionFallaId" })
    @Index()
    public notificacionFalla: NotificacionFalla;




}
