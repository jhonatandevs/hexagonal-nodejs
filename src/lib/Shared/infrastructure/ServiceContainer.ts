import { get } from "http";
import { UserGetAll } from "../../User/application/UserGetAll/UserGetAll";
import { InmemoryUserRepository } from "../../User/infrastructure/InmemoryUserRepository";
import { UserGetOneById } from "../../User/application/UserGetOneById/UserGetOneById";
import { UserEdit } from "../../User/application/UserEdit/UserEdit";
import { UserDelete } from "../../User/application/UserDelete/UserDelete";
import { UserCreate } from "../../User/application/UserCreate/UserCreate";
import { PostgresUserRepository } from "../../User/infrastructure/PostgresUserRepository";

//Podemos facilmente cambiar de DB
// const userRepository = new InmemoryUserRepository();
const userRepository = new PostgresUserRepository('url');
export const ServiceContainer = {
    user:{
        getAll: new UserGetAll(userRepository),
        getOneById: new UserGetOneById(userRepository),
        create: new UserCreate(userRepository),
        edit: new UserEdit(userRepository),
        delete: new UserDelete(userRepository)
    }
}