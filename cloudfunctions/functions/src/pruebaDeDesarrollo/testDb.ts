import { createConnection, getRepository } from "typeorm";
import { User } from "../entity/User";
import { getConnectionDatabase } from "../components/dbHandler";
import { UserRepository } from "../repository/UserRepository";
import { UserService } from "../services/UserService";



async function existeUsername(username) {
    const userRepository = getRepository(User);
    const list = await userRepository.findOne({ where: { "username": username } });
    return list == null
}


createConnection().then(async () => {
    let ur: UserRepository = new UserRepository()
    let userId = 2
    let reportId = 1
    let u: User = await ur.getRepository().createQueryBuilder("user")
        .leftJoinAndSelect("user.profile", "profile")
        .leftJoinAndSelect("profile.reportAvailable", "report")
        .where("user.id = :userId and  report.id=:reportId", { userId, reportId })
        .getOne();
    return u != null
})

/*createConnection().then(() => {
    let u: UserService = new UserService()
    u.hasPermissionsTest(2, "/entities/users/", 1).then(
        (a) => console.log("%j", a)
    ).catch(e => { console.log(e) })
})*/