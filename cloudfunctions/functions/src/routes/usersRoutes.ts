import { User } from "../entity/User";
import { GenericRepository } from "../repository/GenericRepository";
import { UserRepository } from "../repository/UserRepository";
import { ErrorVDF } from "../components/ErrorVDF";
import { checkJwt } from "../middlewares/checkJwt";
import { UserService } from "../services/UserService";
import { postHandlerGenericEntity, getHandlerGenericEntity, getByIdHandlerGenericEntity, updateHandlerGenericEntity, deleteHandlerGenericEntity } from "../components/apiHandler";
import { addToGenericRoute } from "./genericRoutes";
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new UserService()
const currentClass = User
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
