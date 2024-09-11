import { UserCreateAt } from "./UserCreateAt";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";

export class User {
    id: UserId; //volvemos valueObjects, para poder tener mejor semantica y validaciones en tiempo de instanciacion
    name: UserName;
    email: UserEmail;
    /** Colocamos un valueObject a cada elemento para aumentar semantica y sea mas facil de entender*/
    createdAt: UserCreateAt;

    constructor(id: UserId, name: UserName, email: UserEmail, createdAt: UserCreateAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    /**Estos son servicios que solo pueden realizar operaciones de dominio, 
     * sin comunicarse con Infra. Realizan operaciones entre los campos*/
    public nameAndEmail() {
        return `${this.name} - ${this.email}`
    }
}