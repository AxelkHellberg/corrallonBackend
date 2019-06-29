import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { PlantillaRonda } from "./PlantillaRonda";
import { HistorialEstadoFalla } from "./HistorialEstadoFalla";
import { FallaEquipamiento } from "./FallaEquipamiento";
import { FallaSistema } from "./FallaSistema";
@Entity()
export class NotificacionFalla extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @OneToMany(type => HistorialEstadoFalla, historialEstadoFalla => historialEstadoFalla.notificacionFalla)
    public historialEstadosFallas: HistorialEstadoFalla[];

    @OneToMany(type => FallaEquipamiento, fallaEquipamiento => fallaEquipamiento.equipamiento)
    public fallasEquipamiento: FallaEquipamiento[]

    @OneToMany(type => FallaSistema, fallaSistema => fallaSistema.sistema)
    public fallasSistema: FallaSistema[]

    @BeforeInsert()
    private validateInsert(): void {
        if (this.descripcion == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("descripcion"), Msg.CAMPO_OBLIGATORIO("descripcion"), 400)
        if (this.descripcion.length < 10)
            throw new ErrorVDF(Msg.reemplazarCampos(Msg.CAMPO_CARACTERES_MINIMOS, ["descripcion", 10]), Msg.reemplazarCampos(Msg.CAMPO_CARACTERES_MINIMOS, ["descripcion", 10]))
    }
}
