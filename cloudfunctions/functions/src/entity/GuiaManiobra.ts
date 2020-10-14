import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { User } from "./User";
import { Sistema } from "./Sistema";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/Msg";
import { ValorCampoManiobra } from "./ValorCampoManiobra";
import { PlantillaGuiaManiobra } from "./PlantillaGuiaManiobra";
@Entity()
export class GuiaManiobra extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    @Column()
    userId: number;

    @ManyToOne(type => User, user => user.guiasManiobras, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "userId" })
    @Index()
    public user: User;

    @Column()
    plantillaGuiaManiobraId: number; //GET

    @ManyToOne(type => PlantillaGuiaManiobra, plantillaGuiaManiobra => plantillaGuiaManiobra.guiasManiobras, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "plantillaGuiaManiobraId" })
    @Index()
    public plantillaGuiaManiobra: PlantillaGuiaManiobra;


    @OneToMany(type => ValorCampoManiobra, valoresCamposManiobras => valoresCamposManiobras.guiaManiobra)
    public valoresCamposManiobras: ValorCampoManiobra[]


    @BeforeInsert()
    private validateInsert(): void {
        if (this.userId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("userId"), Msg.CAMPO_OBLIGATORIO("userId"), 400)
        if (this.nombre == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("nombre"), Msg.CAMPO_OBLIGATORIO("nombre"), 400)
    }


}
