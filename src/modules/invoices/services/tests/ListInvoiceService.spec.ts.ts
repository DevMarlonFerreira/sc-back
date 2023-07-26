import 'reflect-metadata';
import ListInvoiceService from '../ListInvoiceService';
import FakeInvoicesRepository from '@modules/invoices/domain/repositories/fakes/FakeInvoicesRepository';
import AppError from '@shared/errors/AppError';

let fakeInvoicesRepository: FakeInvoicesRepository;
let listInvoice: ListInvoiceService;

describe('CreateCustomer', () => {
  beforeEach(() => {
    fakeInvoicesRepository = new FakeInvoicesRepository();
    listInvoice = new ListInvoiceService(fakeInvoicesRepository);
  });

  it('should be able to get all new invoices', async () => {
    const invoice = await listInvoice.execute();

    expect(invoice).toHaveProperty('id');
  });
});