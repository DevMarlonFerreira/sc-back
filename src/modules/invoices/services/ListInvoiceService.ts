import { inject, injectable } from 'tsyringe';
import { IInvoicesRepository } from '../domain/repositories/IInvoicesRepository';
import { IInvoice } from '../domain/models/IInvoice';
import Invoice from '../infra/typeorm/entities/Invoice';

// interface SearchParams {
//   page: number;
//   limit: number;
// }

@injectable()
class ListInvoiceService {
  constructor(
    @inject('InvoicesRepository')
    private invoicesRepository: IInvoicesRepository,
  ) {}
  public async execute(): Promise<Invoice[]> {
    // const take = limit;
    // const skip = (Number(page) - 1) * take;
    const invoices = await this.invoicesRepository.findAll();

    return invoices;
  }
}

export default ListInvoiceService;