import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { User } from "./User";
import { Sistema } from "./Sistema";
import { PlantillaGuiaManiobra } from "./PlantillaGuiaManiobra";
import { Msg } from "../msg/Msg";
import { ErrorVDF } from "../components/ErrorVDF";
import { ValorCampoManiobra } from "./ValorCampoManiobra";
import { CampoRonda } from "./CampoRonda";
@Entity()
export class ListaRonda extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    llave: string;

    @Column({ nullable: false })
    valor: string;

    @Column()
    campoRondaId: number;

    @ManyToOne(type => CampoRonda, campoRonda => campoRonda.listasRonda, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "campoRondaId" })
    public campoRonda: CampoRonda;

    @BeforeInsert()
    private validateInsert(): void {
        if (this.llave == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("llave"), Msg.CAMPO_OBLIGATORIO("llave"), 400)
        if (this.valor == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("valor"), Msg.CAMPO_OBLIGATORIO("valor"), 400)
        if (this.campoRondaId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("campoRondaId"), Msg.CAMPO_OBLIGATORIO("campoRondaId"), 400)
    }
}
