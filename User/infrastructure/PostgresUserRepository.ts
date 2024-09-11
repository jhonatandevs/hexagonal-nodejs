import { Pool } from "pg";
import { User } from "../domain/User";
import { UserId } from "../domain/UserId";
import { UserRepository } from "../domain/UserRepository";
import { UserName } from "../domain/UserName";
import { UserEmail } from "../domain/UserEmail";
import { UserCreateAt } from "../domain/UserCreateAt";

export type PostgresUser ={
    id: string,
    name:string,
    email:string,
    created_at: Date
}
export class PostgresUserRepository implements UserRepository{
    client:Pool;
    constructor(databaseUrl:string){
        this.client= new Pool({
            connectionString: databaseUrl,
        });
    }
    async create(user: User): Promise<void> {
        const query ={
            text: "INSERT INTO users (id, name, email) VALUES($1, $2, $3)",
            values:[user.id.value, user.name.value, user.email.value]
        }
        await this.client.query(query);
    }
    async getAll(): Promise<User[]> {
       const query={
        text: "SELECT * FROM users"
       }

       //Debo decirle de que tipo es mi qury, que va a retornar en ste caso va a retornar PostgresUsers

       const result= await this.client.query<PostgresUser>(query);
       return result.rows.map((row)=> this.mapToDomain(row))
    }
    async getOneById(id: UserId): Promise<User | null> {
        const query={
            text:"SELECT * FROM users WHERE id = $1",
            values:[id.value]
        }
        const result= await this.client.query<PostgresUser>(query);
        if(result.rows.length===0) return null;
        const row = result.rows[0];

        return this.mapToDomain(row)

    }
    async edit(user: User): Promise<void> {
        const query={
            text:"UPDATE users SET name = $1, email = $2 WHERE id = $3",
            values:[user.name.value, user.email.value, user.id.value]
        }
        await this.client.query(query);
    }
    async delete(id: UserId): Promise<void> {
        const query={
            text:"DELETE FROM users  WHERE id = $1",
            values:[id.value]
        }
        await this.client.query(query);
    }
    private mapToDomain(user:PostgresUser):User{
        return new User (
            new UserId(user.id),
            new UserName(user.name),
            new UserEmail(user.email),
            new UserCreateAt(user.created_at) 
        )
    }
    
}