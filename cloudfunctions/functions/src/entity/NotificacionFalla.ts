import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn, BeforeRemove } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/Msg";
import { PlantillaRonda } from "./PlantillaRonda";
import { HistorialEstadoFalla } from "./HistorialEstadoFalla";
import { FallaEquipamiento } from "./FallaEquipamiento";
import { FallaSistema } from "./FallaSistema";
import { EstadoFalla } from "./EstadoFalla";
import { TipoFalla } from "./TipoFalla";
import { ValorCampoManiobra } from "./ValorCampoManiobra";
import { ValorCampoRonda } from "./ValorCampoRonda";
@Entity()
export class NotificacionFalla extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @OneToMany(type => HistorialEstadoFalla, historialEstadoFalla => historialEstadoFalla.notificacionFalla)
    public historialEstadosFallas: HistorialEstadoFalla[];

    @OneToMany(type => FallaEquipamiento, fallaEquipamiento => fallaEquipamiento.notificacionFalla)
    public fallasEquipamiento: FallaEquipamiento[]

    @OneToMany(type => FallaSistema, fallaSistema => fallaSistema.notificacionFalla)
    public fallasSistema: FallaSistema[]

    @OneToMany(type => ValorCampoManiobra, valorCampoManiobra => valorCampoManiobra.notificacionFalla)
    public valoresCamposManiobras: ValorCampoManiobra[]

    @OneToMany(type => ValorCampoRonda, valoresCamposRonda => valoresCamposRonda.notificacionFalla)
    public valoresCamposRonda: ValorCampoRonda[]

    @Column()
    estadoFallaId: number;

    @ManyToOne(type => EstadoFalla, estadoFalla => estadoFalla.notificacionesFalla, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "estadoFallaId" })
    @Index()
    public estadoFalla: EstadoFalla;

    @Column()
    tipoFallaId: number;

    @ManyToOne(type => TipoFalla, tipoFalla => tipoFalla.notificacionesFalla, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "tipoFallaId" })
    @Index()
    public tipoFalla: TipoFalla;

    @BeforeInsert()
    private validateInsert(): void {
        if (this.descripcion == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("descripcion"), Msg.CAMPO_OBLIGATORIO("descripcion"), 400)
        if (this.descripcion.length < 10)
            throw new ErrorVDF(Msg.reemplazarCampos(Msg.CAMPO_CARACTERES_MINIMOS, ["descripcion", 10]), Msg.reemplazarCampos(Msg.CAMPO_CARACTERES_MINIMOS, ["descripcion", 10]))
    }
}
