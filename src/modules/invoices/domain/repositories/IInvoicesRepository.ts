import { IInvoice } from "../models/IInvoice";

export interface IInvoicesRepository {
  findAll(): Promise<IInvoice[]>;
  saveInvoice(invoice: IInvoice): Promise<IInvoice>;
  findByClient(client: string, referencemonth: string, referenceyear: string): Promise<IInvoice | null>;
}
