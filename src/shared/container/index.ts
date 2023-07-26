import { container } from 'tsyringe';

import { IInvoicesRepository } from '@modules/invoices/domain/repositories/IInvoicesRepository';
import InvoicesRepository from '@modules/invoices/infra/typeorm/repositories/InvoicesRepository';

container.registerSingleton<IInvoicesRepository>(
  'InvoicesRepository',
  InvoicesRepository,
);
