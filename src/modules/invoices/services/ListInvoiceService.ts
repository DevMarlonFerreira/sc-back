import { inject, injectable } from 'tsyringe';
import { IInvoicesRepository } from '../domain/repositories/IInvoicesRepository';
import { IInvoice } from '../domain/models/IInvoice';

interface SearchParams {
  page: number;
  limit: number;
}

@injectable()
class ListInvoiceService {
  constructor(
    @inject('InvoicesRepository')
    private invoicesRepository: IInvoicesRepository,
  ) {}
  public async execute({
    page,
    limit,
  }: SearchParams): Promise<IInvoice> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const invoices = await this.invoicesRepository.findAll({
      page,
      skip,
      take,
    });

    return invoices;
  }
}

export default ListInvoiceService;