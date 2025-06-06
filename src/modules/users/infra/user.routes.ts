import {z} from "zod"

import type {AppInstance} from "../../../types"
import {createUserSchema, userSchema} from "../domain/user.schema"
import {createUser, listUsers} from "./user.controller"

const USER_TAG = 'users'

export async function userRoutes(app: AppInstance) {
    app.get('/', {
        schema: {
            tags: [USER_TAG],
            description: 'List users',
            response: {
                200: z.array(userSchema),
            },
        }
    }, listUsers)

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
    }, createUser)
}
