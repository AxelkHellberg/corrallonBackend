import { User } from "../entity/User";
import { GenericRepository } from "../repository/GenericRepository";
import { UserRepository } from "../repository/UserRepository";
import { ErrorVDF } from "../components/ErrorVDF";
import { checkJwt } from "../middlewares/checkJwt";
import { UserService } from "../services/UserService";
var express = require('express');
var router = express.Router();
const apiHandler = require("../components/apiHandler")
const jwt = require("../components/jwt")

/******************************************** */
const service = new UserService()
const currentClass = User
/******************************************** */

router.post('/', async (req, res) => {
  apiHandler.postHandlerGenericEntity(req, res, currentClass, service)
});

router.get('/', async (req, res) => {
  apiHandler.getHandlerGenericEntity(req, res, currentClass, service)
});

router.get('/:id', async (req, res) => {
  apiHandler.getHandlerGenericEntity(req, res, currentClass, service)
});

router.patch('/:id', async (req, res) => {
  apiHandler.updateHandlerGenericEntity(req, res, currentClass, service)
});


module.exports = router;
