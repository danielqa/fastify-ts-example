import {z} from "zod"

import type {AppInstance} from "../../../core/types"
import {createUserSchema, userSchema} from "../domain/users.schema"
import {CreateUserService} from "../application/create-user.service"
import {ListUsersService} from "../application/list-users.service"
import {usersRepository} from "./in-memory-users.repository"
import {UsersController} from "./users.controller"

const USER_TAG = 'users'

export async function usersRoutes(app: AppInstance) {
    const listUsers = new ListUsersService(usersRepository)
    const createUser = new CreateUserService(usersRepository)

    const controller = new UsersController({listUsers, createUser})

    app.get('/', {
        schema: {
            tags: [USER_TAG],
            description: 'List users',
            response: {
                200: z.array(userSchema),
            },
        }
    }, controller.listUsers)

    app.post('/', {
        schema: {
            tags: [USER_TAG],
            description: 'Create a new user',
            body: createUserSchema,
            response: {
                201: z.object({
                    message: z.string().describe('Success message')
                })
            },
        }
    }, controller.createUser)
}
