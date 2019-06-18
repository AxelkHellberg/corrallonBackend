import { Request, Response, NextFunction } from "express";
import { normalizeUrl } from "../components/utils";
import { hasPermissionEntity } from "../components/validatePermision";
const mapHTTPMethodDB = require("../config/mapHTTPMethodDB")

export const validatePermissionsEntity = async (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.publicService) {
    next()
    return
  }
  console.log("AAAAAAAAAA")
  let newUrl = normalizeUrl(req.originalUrl)
  //Get the jwt token from the head
  res.locals.hasPermission = await hasPermissionEntity(res.locals.jwtPayload.u, res.locals.jwtPayload.p, newUrl, req.method)
  next()
};

