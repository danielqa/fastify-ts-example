import { CreateUserService } from "./create-user.service"
import { InMemoryUsersRepository } from "../infra/in-memory-users.repository"

describe('CreateUserService', () => {
    it('should create and persist a user', () => {
        const repo = new InMemoryUsersRepository()
        const service = new CreateUserService(repo)

        const user = service.execute({
            name: 'John',
            email: 'john@example.com',
        })

        const allUsers = repo.findAll()

        expect(user.name).toBe('John')
        expect(allUsers).toHaveLength(1)
        expect(allUsers[0]).toEqual(user)
    })
})
