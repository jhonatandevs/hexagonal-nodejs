import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";

export class UserGetOneById {
    constructor(private repository: UserRepository) { }
    async run(
        id: string
    ): Promise<User> {
        const user = this.repository.getOneById(new UserId(id));
        if (!user) throw new UserNotFoundError('User Not Found')
        return user
    }
}