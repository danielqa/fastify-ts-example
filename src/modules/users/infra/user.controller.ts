import type {FastifyReply, FastifyRequest} from "fastify"

import type {CreateUserInput} from "../domain/user.schema"
import {CreateUserService} from "../application/create-user.service"
import {ListUsersService} from "../application/list-users.service"

export async function listUsers(_: FastifyRequest, reply: FastifyReply) {
    const service = new ListUsersService()
    const users = service.execute()
    return reply.send(users)
}

export async function createUser(request: FastifyRequest<{ Body: CreateUserInput }>, reply: FastifyReply) {
    const service = new CreateUserService()
    service.execute(request.body)
    return reply.status(201).send({message: 'User created successfully'})
}
