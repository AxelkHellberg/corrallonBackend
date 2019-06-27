import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToOne, Index, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { Profile } from "./Profile";
import { GuiaManiobra } from "./GuiaManiobra";
let encriptutils = require('../components/encryputils')

@Entity()
export class User extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    fileNumber: string = null; //Legajo

    @Column()
    dni: string;

    @Column({
        nullable: false
    })
    username: string = null;

    @Column({
        nullable: false
    })
    password: string = null;


    @Column()
    public profileId: number = null

    @ManyToOne(type => Profile, profile => profile.users)
    @JoinColumn({ name: "profileId" })
    @Index()
    public profile: Profile

    @BeforeInsert()
    private validateInsert(): void {
        if (this.password == null)
            throw new ErrorVDF(Msg.PASSWORD_MANDATORY, Msg.PASSWORD_MANDATORY, 400)
        if (this.username == null)
            throw new ErrorVDF(Msg.USERNAME_MANDATORY, Msg.USERNAME_MANDATORY, 400)
        if (this.name == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
        if (this.dni == null)
            throw new ErrorVDF(Msg.DNI_MANDATORY, Msg.DNI_MANDATORY, 400)
    }

    @BeforeInsert()
    @BeforeUpdate()
    private encryptPassword(): void {
        this.password = encriptutils.encrypt(this.password)
    }

    @OneToMany(type => GuiaManiobra, guiaManiobra => guiaManiobra.user)
    public guiasManiobras: GuiaManiobra[]

}
