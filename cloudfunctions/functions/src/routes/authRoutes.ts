
import { UserService } from "../services/UserService";
import { responseError } from "../components/apiHandler";
import { ErrorVDF } from "../components/ErrorVDF";
import { getConnection } from "typeorm";
import { GlobalVariable } from "../global";
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt")

/******************************************** */
const service: UserService = new UserService()
/******************************************** */

router.post('/login', async (req, res, next) => {
  console.log(req.body)
  try {
    let user = await service.login(req.body.username, req.body.password)
    let accessToken = jwt.createAccessToken(user)
    res.send({ accessToken })
  } catch (e) {
    await responseError(res, e)
  }
});

router.post('/decodeToken', async (req, res, next) => {
  res.send(jwt.readAccessToken(req.body.accessToken))
});

router.post('/loginSinVerificacion', async (req, res, next) => {
  try {
    let r = await getConnection().query("SELECT * FROM users WHERE LoginName='" +req.body.username+ "' and Password=" +req.body.password);
    let accessToken = jwt.createAccessToken(req.body.username,req.body.password)
    res.send({ accessToken })
    
} catch (e) {
    await responseError(res, e)


}
});

router.post('/loginValidacion', async (req, res, next) => {
  try {
    let r = await getConnection().query("SELECT * FROM users WHERE LoginName='" +req.body.username+ "' and Password=" +req.body.password);

    res.send(r)
    
} catch (e) {
    await responseError(res, e)


}
});

module.exports = router;
