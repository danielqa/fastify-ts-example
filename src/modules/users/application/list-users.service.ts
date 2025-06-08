import type {User} from "../domain/users.entity"
import type {UsersRepository} from "../domain/users.repository"

export class ListUsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    execute(): User[] {
        return this.usersRepository.findAll()
    }
}
