import { Request, Response, NextFunction } from "express";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/Msg";
const jwt = require("../components/jwt")
const apiHandler = require("../components/apiHandler")

export const test = async (req: Request, res: Response, next: NextFunction) => {
    console.log("ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    console.log(res.locals.responseData)
};