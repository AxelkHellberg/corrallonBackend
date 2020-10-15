"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const GenericService_1 = require("./GenericService");
const ProfileRepository_1 = require("../repository/ProfileRepository");
let encriptutils = require('../components/encryputils');
/******************CONFIG CLASS************************** */
const myRepository = ProfileRepository_1.ProfileRepository;
/******************************************************** */
class ProfileService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.ProfileService = ProfileService;
//# sourceMappingURL=ProfileService.js.map