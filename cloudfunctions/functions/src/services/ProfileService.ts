import { GenericeService } from './GenericService'; 
import { ProfileRepository } from '../repository/ProfileRepository';
import { Profile } from '../entity/Profile';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = ProfileRepository
/******************************************************** */

export class ProfileService/**config */ extends GenericeService<Profile/**config */> {
    constructor() {
        super(new myRepository())
    }
}