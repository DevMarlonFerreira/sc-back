import { Router } from "express";
import invoicesRouter from "@modules/invoices/infra/http/routes/invoices.routes";

const routes = Router();

routes.use("/api/invoices", invoicesRouter);

routes.get("/", (_, res) => {
  return res.json({ message: "ok" });
});

export default routes;
