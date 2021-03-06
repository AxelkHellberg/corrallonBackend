import { Sistema } from "../entity/Sistema";
import { GenericeService } from "./GenericService";
import { SistemaRepository } from "../repository/SistemaRepository";
import { TagRepository } from "../repository/TagRepository";
import { Tag } from "../entity/Tag";

/****************Configuration******************** */
const myRepository = TagRepository
/************************************* */
export class TagService/**config */ extends GenericeService<Tag/**config */> {
    constructor() {
        super(new myRepository())
    }
}