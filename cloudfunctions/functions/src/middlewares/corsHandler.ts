import { Request, Response, NextFunction } from "express";

export const corsHandler = async (req: Request, res: Response, next: NextFunction) => {
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin[0]);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }
    //    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
    return
};

