import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Sistema } from "./Sistema";
import { PlantillaGuiaManiobra } from "./PlantillaGuiaManiobra";
import { Msg } from "../msg/msg";
import { ErrorVDF } from "../components/ErrorVDF";
import { ValorCampoManiobra } from "./ValorCampoManiobra";
import { Equipamiento } from "./Equipamiento";
import { TipoCampoRondaService } from "../services/TipoCampoRondaService";
import { TipoCampoRonda } from "./TipoCampoRonda";
import { UnidadMedida } from "./UnidadMedida";
@Entity()
export class CampoRonda extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({ nullable: false })
    valorNormal: string;

    @Column()
    valorMin: string;

    @Column()
    valorMax: string;

    @Column()
    equipamientoId: number;

    @ManyToOne(type => Equipamiento, equipamiento => equipamiento.camposRonda)
    @JoinColumn({ name: "equipamientoId" })
    public equipamiento: Equipamiento;

    @Column()
    tipoCampoRondaId: number;

    @ManyToOne(type => TipoCampoRonda, tipoCampoRondaService => tipoCampoRondaService.camposRonda)
    @JoinColumn({ name: "tipoCampoRondaId" })
    public tipoCampoRonda: TipoCampoRonda;

    @Column()
    unidadMedidaId: number;

    @ManyToOne(type => UnidadMedida, unidadMedida => unidadMedida.camposRonda)
    @JoinColumn({ name: "unidadMedidaId" })
    public unidadMedida: UnidadMedida;

    @BeforeInsert()
    private validateInsert(): void {
        if (this.valorNormal == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("valorNormal"), Msg.CAMPO_OBLIGATORIO("valorNormal"), 400)
        if (this.nombre == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("nombre"), Msg.CAMPO_OBLIGATORIO("nombre"), 400)
    }
}
