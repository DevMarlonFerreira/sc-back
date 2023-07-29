import { inject, injectable } from "tsyringe";
import { IInvoicesRepository } from "../domain/repositories/IInvoicesRepository";
import { IInvoice } from "../domain/models/IInvoice";

class SavePdfService {
  constructor(
    @inject("InvoicesRepository")
    private pdfRepository: IInvoicesRepository
  ) {}
  public async savePdf(pdf: IInvoice): Promise<IInvoice> {
    const invoices = await this.pdfRepository.savePdf(pdf)

    return invoices;
  }
}

export default SavePdfService;
