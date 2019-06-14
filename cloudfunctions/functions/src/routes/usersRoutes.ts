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
const SERVICE_NAME = "users"
const repository = new UserService()
const currentClass = User
/******************************************** */

router.post('/' + SERVICE_NAME, async (req, res) => {
  apiHandler.postHandlerGenericEntity(req, res, currentClass, repository)
});

router.get('/' + SERVICE_NAME, async (req, res) => {
  apiHandler.getHandlerGenericEntity(req, res, currentClass, repository)
});

router.get('/' + SERVICE_NAME + "/:id", async (req, res) => {
  apiHandler.getHandlerGenericEntity(req, res, currentClass, repository)
});

router.patch('/' + SERVICE_NAME + "/:id", async (req, res) => {
  apiHandler.updateHandlerGenericEntity(req, res, currentClass, repository)
});


module.exports = router;
