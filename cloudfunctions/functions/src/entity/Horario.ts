import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { PlantillaRonda } from "./PlantillaRonda";

@Entity()
export class Horario extends GenericEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dia: number;

  @Column()
  tipoRecurrencia: number;

  @Column()
  hora: string;

  @Column()
  fechaInicio: Date;

  @Column()
  fechaFin: Date;

  @Column()
  plantillaId: number;
  
  @ManyToOne(type => PlantillaRonda, plantillaRonda => plantillaRonda.horariosRecurrentes)
  @JoinColumn({ name: "plantillaId" })
  public plantilla: PlantillaRonda;


}