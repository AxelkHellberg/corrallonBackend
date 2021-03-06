import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { User } from "./User";
import { PermissionWS } from "./PermissionWS";
import { Report } from "./Report";
import { Planta } from "./Planta";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/Msg";
import { Equipamiento } from "./Equipamiento";
import { Tag } from "./Tag";
import { CampoManiobra } from "./CampoManiobra";
import { FallaSistema } from "./FallaSistema";
import { TipoSistema } from "./TipoSistema";
@Entity()
export class Sistema extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    KKS: string;


    @Column()
    plantaId: number; //GET

    @ManyToOne(type => Planta, planta => planta.sistemas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "plantaId" })
    public planta: Planta;

    @Column()
    tipoSistemaId: number; //GET

    @ManyToOne(type => TipoSistema, tipoSistema => tipoSistema.sistemas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "tipoSistemaId" })
    public tipoSistema: TipoSistema;

    @Column({ nullable: true })
    tagId: number; //GET

    @ManyToOne(type => Tag, tag => tag.sistemas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "tagId" })
    public tag: Tag;

    @OneToMany(type => Equipamiento, equipamiento => equipamiento.sistema)
    public equipamientos: Equipamiento[]

    @OneToMany(type => CampoManiobra, campoManiobra => campoManiobra.sistema)
    public camposManiobras: CampoManiobra[]

    @OneToMany(type => FallaSistema, fallaSistema => fallaSistema.sistema)
    public fallasSistema: FallaSistema[]

    @BeforeInsert()
    private validateInsert(): void {
        if (this.nombre == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
        if (this.plantaId == null)
            throw new ErrorVDF(Msg.PLANTA_MANDATORY, Msg.PLANTA_MANDATORY, 400)
    }
}


