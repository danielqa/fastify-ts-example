import type {User} from "../domain/user.schema"

export class UserRepository {
    // Temporary in-memory storage for demonstration purposes.
    // In a real application, this would be replaced by a database.
    private users: User[] = []

    save(user: User): void {
        this.users.push(user)
    }

    findAll(): User[] {
        return this.users
    }
}

export const usersRepository = new UserRepository()
