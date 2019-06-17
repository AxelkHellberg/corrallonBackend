import { Request, Response, NextFunction } from "express";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { UserService } from "../services/UserService";
const apiHandler = require("../components/apiHandler")

export const validatePermissionsReports = async (req: Request, res: Response, next: NextFunction) => {
  if (!("id" in req.body))
    throw new ErrorVDF(Msg.ID_MANDATORY, Msg.ID_MANDATORY, 500)
  const us: UserService = new UserService()
  const hasPermissions: boolean = await us.hasPermissionsReport(res.locals.jwtPayload.u, req.body.id)
  if (!hasPermissions) {
    apiHandler.responseError(res, new ErrorVDF(Msg.UNAHUTORIZED, Msg.UNAHUTORIZED, 401))
    return
  }
  next()

};

