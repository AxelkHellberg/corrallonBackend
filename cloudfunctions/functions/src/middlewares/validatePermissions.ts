import { Request, Response, NextFunction } from "express";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { normalize } from "path";
import { UserService } from "../services/UserService";
const jwt = require("../components/jwt")
const apiHandler = require("../components/apiHandler")
const mapHTTPMethodDB = require("../config/mapHTTPMethodDB")
export const validatePermissions = async (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  let newUrl = normalizeUrl(req.originalUrl)
  console.log(newUrl)
  console.log(newUrl, res.locals.jwtPayload.u, mapHTTPMethodDB[req.method])
  const userService = new UserService()
  let hasPermission: boolean = await userService.hasPermissionsEntity(res.locals.jwtPayload.u, newUrl, mapHTTPMethodDB[req.method])
  if (!hasPermission) {
    apiHandler.responseError(res, new ErrorVDF(Msg.UNAHUTORIZED, Msg.UNAHUTORIZED, 401))
    return
  }
  next()

};

function normalizeUrl(url) {
  console.log(url)
  let newUrl: string = url.split("?")[0]
  if (newUrl.slice(-1) != "/")
    newUrl = newUrl + "/"
  return newUrl
}