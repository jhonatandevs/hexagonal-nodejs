import { User } from "../../domain/User";
import { UserCreateAt } from "../../domain/UserCreateAt";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";

export class UserEdit {
    constructor(private repository: UserRepository) { }

    async run(
        id: string,
        name: string,
        email: string,
        createAt:Date
    ): Promise<void> {
        const user = new User(
            new UserId(id),
            new UserName(name),
            new UserEmail(email),
            new UserCreateAt(createAt),
        )
        const userExist= await this.repository.getOneById(user.id);
        if(!userExist) throw new UserNotFoundError("User not found")
        /** Sabemos que las validaciones se van a hacr antes d crearlo,
         * eso se realiza en el momento de instanciacion con los metodos propios del valueObject,
         * sindo sto un beneficio de hacerlo aqui antes de que pase a la DB
         */
        return this.repository.edit(user);
    }
}