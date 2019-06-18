import { UserService } from "../services/UserService";
import { Profile } from "../entity/Profile";

const mapHTTPMethodDB = require("../config/mapHTTPMethodDB")



export const hasPermissionEntity = async function (userId, perfilId, url, method): Promise<Boolean> {
  const userService: UserService = new UserService()
  console.log(userId, perfilId, url, mapHTTPMethodDB[method])
  let hasPermission: boolean = await userService.hasPermissionsEntity(userId, url, mapHTTPMethodDB[method])
  console.log(hasPermission)
  return perfilId == Profile.ID_ADMIN || hasPermission
}