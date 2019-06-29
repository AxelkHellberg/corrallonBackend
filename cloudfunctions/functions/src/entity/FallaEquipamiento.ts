import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { Ronda } from "./Ronda";
import { Equipamiento } from "./Equipamiento";
import { NotificacionFalla } from "./NotificacionFalla";
@Entity()
export class FallaEquipamiento extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    equipamientoId: number;

    @ManyToOne(type => Equipamiento, equipamiento => equipamiento.fallasEquipamiento)
    @JoinColumn({ name: "equipamientoId" })
    @Index()
    public equipamiento: Equipamiento;

    @Column()
    notificacionFallaId: number;

    @ManyToOne(type => NotificacionFalla, notificacionFalla => notificacionFalla.fallasEquipamiento)
    @JoinColumn({ name: "notificacionFallaId" })
    @Index()
    public notificacionFalla: NotificacionFalla;

}
