import type {AppInstance} from "./types"
import {usersRoutes} from "../modules/users/infra/users.routes"

export async function routes(app: AppInstance) {
    await app.register(usersRoutes, {prefix: '/users'})
}
