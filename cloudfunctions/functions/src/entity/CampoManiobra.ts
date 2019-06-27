import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { User } from "./User";
import { Sistema } from "./Sistema";
import { PlantillaGuiaManiobra } from "./PlantillaGuiaManiobra";
import { Msg } from "../msg/msg";
import { ErrorVDF } from "../components/ErrorVDF";
import { ValorCampoManiobra } from "./ValorCampoManiobra";
@Entity()
export class CampoManiobra extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    valorNormal: boolean = true;

    @Column()
    sistemaId: number;

    @ManyToOne(type => Sistema, sistema => sistema.camposManiobras)
    @JoinColumn({ name: "sistemaId" })
    public sistema: Sistema;

    @Column()
    plantillaGuiaManiobraId: number; //GET

    @ManyToOne(type => PlantillaGuiaManiobra, plantillaGuiaManiobra => plantillaGuiaManiobra.camposManiobras)
    @JoinColumn({ name: "plantillaGuiaManiobraId" })
    public plantillaGuiaManiobra: PlantillaGuiaManiobra;

    @OneToMany(type => ValorCampoManiobra, valoresCamposManiobras => valoresCamposManiobras.campoManiobra)
    public valoresCamposManiobras: ValorCampoManiobra[]

    @BeforeInsert()
    private validateInsert(): void {
        if (this.sistemaId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("sistemaId"), Msg.CAMPO_OBLIGATORIO("sistemaId"), 400)
        if (this.plantillaGuiaManiobraId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("plantillaGuiaManiobraId"), Msg.CAMPO_OBLIGATORIO("plantillaGuiaManiobraId"), 400)
        if (this.nombre == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("name"), Msg.CAMPO_OBLIGATORIO("name"), 400)
    }
}
