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

router.post('/', async (req, res, next) => {
  await apiHandler.postHandlerGenericEntity(req, res, currentClass, service)
  next()
});

router.get('/', async (req, res, next) => {
  await apiHandler.getHandlerGenericEntity(req, res, currentClass, service)
  next()
});

router.get('/:id', async (req, res, next) => {
  await apiHandler.getByIdHandlerGenericEntity(req, res, currentClass, service)
  next()
});

router.patch('/:id', async (req, res, next) => {
  await apiHandler.updateHandlerGenericEntity(req, res, currentClass, service)
  next()
});

router.delete('/:id', async (req, res, next) => {
  await apiHandler.deleteHandlerGenericEntity(req, res, currentClass, service)
  next()
});

module.exports = router;
