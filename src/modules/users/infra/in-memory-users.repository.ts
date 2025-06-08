import type {User} from "../domain/users.entity"
import type {UsersRepository} from "../domain/users.repository"

export class InMemoryUsersRepository implements UsersRepository {
    private users: User[] = []

    save(user: User): void {
        this.users.push(user)
    }

    findAll(): User[] {
        return this.users
    }
}

export const usersRepository = new InMemoryUsersRepository()
