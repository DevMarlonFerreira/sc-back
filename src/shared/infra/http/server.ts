import "reflect-metadata";
import "dotenv/config";
import express, { NextFunction, Request, Response, Application } from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { errors } from "celebrate";
import routes from "./routes";
import AppError from "@shared/errors/AppError";
// import '@shared/typeorm';
import "@shared/container";
import logger from "@config/logger";
import { connect } from "../typeorm";

// import "@shared/infra/typeorm";


import PdfSaveProvider from "@shared/providers/pdf/PdfSaveProvider";


export class SetupServer {
  private app: Application;
  private pdfSaveProvider: PdfSaveProvider;

  constructor(private port = 3333) {
    this.app = express();

  }

  public async init() {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(compression());

    this.app.use(routes);
    this.app.use(errors());
    this.app.use(
      (error: Error, _: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError) {
          return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
          });
        } else {
          logger.info("Error: " + error);
          return response.status(500).json({
            status: "error",
            message: "Internal server error",
          });
        }
      }
    );
  }

  private async databaseSetup(): Promise<void> {
    await connect;
  }

  public async start(): Promise<void> {
    await this.databaseSetup();

    // this.pdfSaveProvider = new PdfSaveProvider();
    // this.pdfSaveProvider.savePdf();

    this.app.listen(this.port, () => {
      logger.info("Server rodando na porta: " + this.port + " 🚀");
    });
  }

  public getApp(): Application {
    return this.app;
  }
}
