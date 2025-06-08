import type {User} from "./users.entity"

export interface UsersRepository {
    save(user: User): void
    findAll(): User[]
}
