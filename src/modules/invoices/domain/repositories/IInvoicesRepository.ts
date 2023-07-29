import { IInvoice } from "../models/IInvoice";

// export type SearchParams = {
//   page: number;
//   skip: number;
//   take: number;
// };

export interface IInvoicesRepository {
  findAll(): Promise<IInvoice[]>;
  savePdf(pdf: IInvoice): Promise<IInvoice>;
}
