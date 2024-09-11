import * as express from 'express'
import { Request, Response, NextFunction } from 'express'
import { ExpressUserRouter } from './lib/User/infrastructure/ExpressUserRouter';
const app = express();
app.use(express.json())
/** Aqui podemos ejecutar varios routers, dependiendo del dominio o de la funcionalidad */
app.use(ExpressUserRouter)
/** Al colocar de primero los errores, express sabe que vamos a usarlo como middleware para manejo de errores*/
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        console.log(err.stack);
        res.status(500).json({ message: err.message })
    }
    console.error(err)
    return res.status(500).json({ message: "Something broke!" })
})
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
