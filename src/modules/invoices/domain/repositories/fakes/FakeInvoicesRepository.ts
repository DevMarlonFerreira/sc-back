import { IInvoicesRepository } from "@modules/invoices/domain/repositories/IInvoicesRepository";
import Invoice from "@modules/invoices/infra/typeorm/entities/Invoice";

// class FakeCustomersRepository implements Omit<ICustomersRepository, 'remove' | 'findAll'> {
class FakeInvoicesRepository implements IInvoicesRepository {
  private invoices: Invoice[] = [];

  public async findAll(): Promise<Invoice[]> {
    const invoice = new Invoice();

    invoice.client = "7202788969";
    invoice.reference = "Fevereiro/2023";
    invoice.date = "08/03/2023";
    invoice.energyQuantity = "100";
    invoice.energyPriceUnit = "0,83394409";
    invoice.energyValue = "83,38";
    invoice.injectedQuantity = "1.243";
    invoice.injectedPriceUnit = "0,65313000";
    invoice.injectedValue = "-811,84";
    invoice.sICMSQuantity = "1.243";
    invoice.sICMSPriceUnit = "0,68383415";
    invoice.sICMSValue = "850,00";
    invoice.publicContributionValue = "35,92";
    invoice.total = "161,30";

    this.invoices.push(invoice);

    return this.invoices;
  }
}

export default FakeInvoicesRepository;
