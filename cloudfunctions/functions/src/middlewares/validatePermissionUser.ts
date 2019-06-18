import { Request, Response, NextFunction } from "express";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { UserService } from "../services/UserService";
const apiHandler = require("../components/apiHandler")

export const validatePermissionsUser = async (req: Request, res: Response, next: NextFunction) => {
    if (req.method == "POST")
        res.locals.hasPermission = true
    next()
};