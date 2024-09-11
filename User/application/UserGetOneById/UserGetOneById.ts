import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";

export class UserGetOneById {
    constructor(private repository: UserRepository) { }
    async run(
        id: string
    ): Promise<User> {
        const user = await this.repository.getOneById(new UserId(id));
        /**Creamos nuestro propio tipo de error, para luego preguntar de que tipo es el error, 
         * si es instancia de este tipo respondemos de una u otra manera */
        if (!user) throw new UserNotFoundError('User Not Found')
        return user;
    }
}