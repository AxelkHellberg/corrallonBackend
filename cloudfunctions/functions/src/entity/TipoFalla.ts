import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Planta } from "./Planta";
import { Sistema } from "./Sistema";
import { Equipamiento } from "./Equipamiento";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { LecturaTag } from "./LecturaTag";
import { NotificacionFalla } from "./NotificacionFalla";
@Entity()
export class TipoFalla extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    posicion: number;

    @OneToMany(type => NotificacionFalla, notificacionFalla => notificacionFalla.tipoFalla)
    public notificacionesFalla: NotificacionFalla[];

    @BeforeInsert()
    private validateInsert(): void {
        if (this.nombre == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
    }
}
