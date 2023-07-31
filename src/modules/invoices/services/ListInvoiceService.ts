import { inject, injectable } from 'tsyringe';
import { IInvoicesRepository } from '../domain/repositories/IInvoicesRepository';
import Invoice from '../infra/typeorm/entities/Invoice';

@injectable()
class ListInvoiceService {
  constructor(
    @inject('InvoicesRepository')
    private invoicesRepository: IInvoicesRepository,
  ) {}
  public async execute(): Promise<Invoice[]> {
    const invoices = await this.invoicesRepository.findAll();

    return invoices;
  }
}

export default ListInvoiceService;