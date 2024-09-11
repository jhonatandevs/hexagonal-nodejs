import {Router} from 'express'
import { ExpressUserController } from './ExpressUserController';
const ExpressUserRouter = Router();
const controller = new ExpressUserController();
ExpressUserRouter.get("/user/", controller.getAll);
ExpressUserRouter.get("/user/:id", controller.getOneById);
ExpressUserRouter.post("/user/", controller.create);
ExpressUserRouter.put("/user/", controller.edit);
ExpressUserRouter.delete("/user/:id", controller.delete);

export {ExpressUserRouter};