import { UserService } from "../services/UserService";
import { Profile } from "../entity/Profile";

const mapHTTPMethodDB = require("../config/mapHTTPMethodDB")



export const hasPermissionEntity = async function (userId, perfilId, url, method): Promise<Boolean> {
  if (perfilId == Profile.ID_ADMIN)
    return true
  const userService: UserService = new UserService()
  console.log(userId, perfilId, url, mapHTTPMethodDB[method])
  let hasPermission: boolean = await userService.hasPermissionsEntity(userId, url, mapHTTPMethodDB[method])
  console.log(hasPermission)
  return hasPermission
}

export const hasPermissionReport = async function (userId, perfilId, reportId): Promise<Boolean> {
  if (perfilId == Profile.ID_ADMIN)
    return true
  const userService: UserService = new UserService()
  console.log(userId, perfilId)
  let hasPermission: boolean = await userService.hasPermissionsReport(userId, reportId)
  console.log(hasPermission)
  return hasPermission
}