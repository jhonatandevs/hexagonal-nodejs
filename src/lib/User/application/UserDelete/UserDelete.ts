import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";

export class UserDelete {
    constructor(private repository: UserRepository) { }
    async run(
        id: string
    ): Promise<void> {
        const userExist= await this.repository.getOneById(new UserId(id));
        if(!userExist) 
            throw new UserNotFoundError("User not found")
        await this.repository.delete(new UserId(id));
    }
}