import type {User} from "../domain/user.schema"
import {usersRepository} from "../infra/user.repository"

export class ListUsersService {
    execute(): User[] {
        return usersRepository.findAll()
    }
}
