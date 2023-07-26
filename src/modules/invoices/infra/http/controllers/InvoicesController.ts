import { Request, Response } from "express";
import { container } from "tsyringe";
import ListInvoiceService from "@modules/invoices/services/ListInvoiceService";

export default class InvoicesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;

    const listInvoice = container.resolve(ListInvoiceService);
    const invoice = await listInvoice.execute({ page, limit });

    return response.json(invoice);
  }
}
