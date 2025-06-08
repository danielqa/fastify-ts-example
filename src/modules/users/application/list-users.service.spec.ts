import { ListUsersService } from './list-users.service'
import { InMemoryUsersRepository } from '../infra/in-memory-users.repository'
import { User } from '../domain/users.entity'

describe('ListUsersService', () => {
    it('should return all users from the repository', () => {
        const usersRepository = new InMemoryUsersRepository()

        const user1 = new User('1', 'John', 'john@example.com')
        const user2 = new User('2', 'Maria', 'maria@example.com')

        usersRepository.save(user1)
        usersRepository.save(user2)

        const service = new ListUsersService(usersRepository)
        const users = service.execute()

        expect(users).toEqual([user1, user2])
    })
})
