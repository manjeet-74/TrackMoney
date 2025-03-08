import { Router } from "express";
import { transactionRoute } from "./transaction";

export const routes = Router();

routes.use(transactionRoute);
