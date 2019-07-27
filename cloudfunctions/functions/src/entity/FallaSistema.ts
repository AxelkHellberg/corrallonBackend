import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { Ronda } from "./Ronda";
import { Equipamiento } from "./Equipamiento";
import { NotificacionFalla } from "./NotificacionFalla";
import { Sistema } from "./Sistema";
@Entity()
export class FallaSistema extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sistemaId: number;

    @ManyToOne(type => Sistema, sistema => sistema.fallasSistema, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "sistemaId" })
    @Index()
    public sistema: Sistema;

    @Column()
    notificacionFallaId: number;

    @ManyToOne(type => NotificacionFalla, notificacionFalla => notificacionFalla.fallasSistema, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "notificacionFallaId" })
    @Index()
    public notificacionFalla: NotificacionFalla;

}
