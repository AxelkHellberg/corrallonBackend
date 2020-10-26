import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Sistema } from "./Sistema";
import { PlantillaGuiaManiobra } from "./PlantillaGuiaManiobra";
import { Msg } from "../msg/Msg";
import { ErrorVDF } from "../components/ErrorVDF";
import { ValorCampoManiobra } from "./ValorCampoManiobra";
import { Equipamiento } from "./Equipamiento";
import { TipoCampoRondaService } from "../services/TipoCampoRondaService";
import { TipoCampoRonda } from "./TipoCampoRonda";
import { UnidadMedida } from "./UnidadMedida";
import { ListaRonda } from "./ListaRonda";
import { PlantillaRonda } from "./PlantillaRonda";
import { ValorCampoRonda } from "./ValorCampoRonda";
import { CampoRondaPlantillaRonda } from "./CampoRondaPlantillaRonda";
@Entity()
export class CampoRonda extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    public descripcion

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

    @Column()
    funcionamientoSistema: boolean = true;

    @Column()
    obligatorioSistema: boolean = false;

    @Column()
    funcionamientoEquipo: boolean = true;

    @Column()
    obligatorioEquipo: boolean = false;

    @ManyToOne(type => Equipamiento, equipamiento => equipamiento.camposRonda, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "equipamientoId" })
    public equipamiento: Equipamiento;

    @Column()
    tipoCampoRondaId: number;

    @ManyToOne(type => TipoCampoRonda, tipoCampoRondaService => tipoCampoRondaService.camposRonda, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "tipoCampoRondaId" })
    public tipoCampoRonda: TipoCampoRonda;

    @Column()
    unidadMedidaId: number;

    @ManyToOne(type => UnidadMedida, unidadMedida => unidadMedida.camposRonda, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "unidadMedidaId" })
    public unidadMedida: UnidadMedida;

    @OneToMany(type => ListaRonda, listaRonda => listaRonda.campoRonda)
    public listasRonda: ListaRonda[]

    @OneToMany(type => ValorCampoRonda, valorCampoRonda => valorCampoRonda.campoRonda)
    public valoresCamposRonda: ValorCampoRonda[]

    @OneToMany(type => CampoRondaPlantillaRonda, campoRondaplantillaRonda => campoRondaplantillaRonda.campoRonda)
    public campoRondaPlantillaRonda: CampoRondaPlantillaRonda[]

    @BeforeInsert()
    private validateInsert(): void {
        if (this.valorNormal == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("valorNormal"), Msg.CAMPO_OBLIGATORIO("valorNormal"), 400)
        if (this.nombre == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("nombre"), Msg.CAMPO_OBLIGATORIO("nombre"), 400)
    }
}
