import type {FastifyReply, FastifyRequest} from "fastify"

import type {CreateUserInput} from "../domain/users.schema"
import type {CreateUserService} from "../application/create-user.service"
import type {ListUsersService} from "../application/list-users.service"

export class UsersController {
    constructor(private readonly services: {
        createUser: CreateUserService
        listUsers: ListUsersService
    }) {}

    listUsers = async (_: FastifyRequest, reply: FastifyReply) => {
        const users = this.services.listUsers.execute()
        return reply.send(users)
    }

    createUser = async (request: FastifyRequest, reply: FastifyReply) => {
        this.services.createUser.execute(request.body as CreateUserInput)
        return reply.status(201).send({message: 'User created successfully'})
    }
}
