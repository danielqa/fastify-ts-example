import { randomUUID } from 'node:crypto'

import {User} from "../domain/users.entity"
import type {CreateUserInput} from "../domain/users.schema"
import type {UsersRepository} from "../domain/users.repository"

export class CreateUserService {
    constructor(private readonly usersRepository: UsersRepository) {}

    execute({name, email}: CreateUserInput): User {
        const user = new User(randomUUID(), name, email)
        this.usersRepository.save(user)
        return user
    }
}
