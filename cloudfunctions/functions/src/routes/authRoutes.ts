
import { UserService } from "../services/UserService";
import { responseError } from "../components/apiHandler";
import { ErrorVDF } from "../components/ErrorVDF";
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

module.exports = router;
