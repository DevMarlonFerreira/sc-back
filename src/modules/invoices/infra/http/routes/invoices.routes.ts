import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import InvoicesController from "../controllers/InvoicesController";

const invoicesRouter = Router();
const invoicesController = new InvoicesController();

invoicesRouter.get("/", invoicesController.index);

export default invoicesRouter;
