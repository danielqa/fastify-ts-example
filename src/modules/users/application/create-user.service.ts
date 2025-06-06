import { randomUUID } from 'node:crypto'

import type {CreateUserInput, User} from "../domain/user.schema"
import {usersRepository} from "../infra/user.repository"

export class CreateUserService {
    execute(data: CreateUserInput): User {
        const user: User = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
        }

        usersRepository.save(user)
        return user
    }
}
