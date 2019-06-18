import { getPublicServices } from "../components/publicService";
import { Request, Response, NextFunction } from "express";
import { normalizeUrl } from "../components/utils";

export const checkPublicService = async (req: Request, res: Response, next: NextFunction) => {
    let publicService: any = getPublicServices()
    let newUrl = normalizeUrl(req.originalUrl)
    console.log(newUrl)
    for (let i = 0; i < publicService.length; i++)
        if (publicService[i].url == newUrl && publicService[i].method == req.method) {
            res.locals.publicService = true
        }
    console.log(res.locals.publicService)
    next()
}