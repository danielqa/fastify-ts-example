import type {AppInstance} from "./types"
import {userRoutes} from "./modules/users/infra/user.routes"

export async function routes(app: AppInstance) {
    await app.register(userRoutes, {prefix: '/users'})
}
