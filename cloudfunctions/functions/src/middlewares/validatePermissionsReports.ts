import { Request, Response, NextFunction } from "express";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { UserService } from "../services/UserService";
const apiHandler = require("../components/apiHandler")

export const validatePermissionsReports = async (req: Request, res: Response, next: NextFunction) => {
  if (!("id" in req.body)) {
    apiHandler.responseError(res, new ErrorVDF(Msg.ID_MANDATORY, Msg.ID_MANDATORY, 500))
    return
  }
  const us: UserService = new UserService()
  res.locals.hasPermission = await us.hasPermissionsReport(res.locals.jwtPayload.u, req.body.id)
  console.log(res.locals.hasPermission)
  next()

};

