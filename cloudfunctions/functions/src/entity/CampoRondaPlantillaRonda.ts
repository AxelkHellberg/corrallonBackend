import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { User } from "./User";
import { CampoRonda } from "./CampoRonda";
import { PlantillaRonda } from "./PlantillaRonda";

@Entity()
export class CampoRondaPlantillaRonda extends GenericEntity {

    @PrimaryColumn()
    campoRondaId: number;

    @PrimaryColumn()
    plantillaRondaId: number;

    @ManyToOne(type => CampoRonda, campoRonda => campoRonda.id)
    @JoinColumn({ name: "campoRondaId" })
    public campoRonda!: CampoRonda;

    @ManyToOne(type => PlantillaRonda, plantillaRonda => plantillaRonda.id)
    @JoinColumn({ name: "plantillaRondaId" })
    public plantillaRonda!: PlantillaRonda;

}
