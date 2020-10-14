import { Request, Response, NextFunction } from "express";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/Msg";
import { UserService } from "../services/UserService";
import { hasPermissionReport } from "../components/validatePermision";
const apiHandler = require("../components/apiHandler")

export const validatePermissionsReports = async (req: Request, res: Response, next: NextFunction) => {
  if (!("id" in req.body)) {
    apiHandler.responseError(res, new ErrorVDF(Msg.ID_MANDATORY, Msg.ID_MANDATORY, 500))
    return
  }
  const us: UserService = new UserService()
  res.locals.hasPermission = await hasPermissionReport(res.locals.jwtPayload.u, res.locals.jwtPayload.p, req.body.id)
  console.log(res.locals.hasPermission)
  next()

};

