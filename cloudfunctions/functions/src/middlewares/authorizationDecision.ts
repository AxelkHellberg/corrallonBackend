import { Request, Response, NextFunction } from "express";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { normalize } from "path";
const apiHandler = require("../components/apiHandler")

export const authorizationDecision = async (req: Request, res: Response, next: NextFunction) => {
    console.log(".............")
    console.log(res.locals.publicService != true)
    console.log(!res.locals.hasPermission)
    console.log(".............")
    if (res.locals.publicService != true && !res.locals.hasPermission) {
        if (!("errorVDF" in res.locals))
            apiHandler.responseError(res, new ErrorVDF(Msg.UNAHUTORIZED, Msg.UNAHUTORIZED, 401))
        else
            apiHandler.responseError(res, res.locals.errorVDF)
        return;
    }
    next()
};
