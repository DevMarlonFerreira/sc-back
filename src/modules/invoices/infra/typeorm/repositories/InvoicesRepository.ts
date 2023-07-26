import { IInvoicesRepository } from "@modules/invoices/domain/repositories/IInvoicesRepository";
import { Repository } from "typeorm";
import Invoice from "../entities/Invoice";
import { dataSource } from "@shared/infra/typeorm/ormconfig";

// type SearchParams = {
//   page: number;
//   skip: number;
//   take: number;
// };

class UsersRepository implements IInvoicesRepository {
  private ormRepository: Repository<Invoice>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Invoice);
  }
  public async findAll(): Promise<Invoice[]> {
    const [invoices, count] = await this.ormRepository
      .createQueryBuilder()
      // .skip(skip)
      // .take(take)
      .getManyAndCount();

    // const result = {
    //   per_page: take,
    //   total: count,
    //   current_page: page,
    //   data: invoices,
    // };

    return invoices;
  }
}

export default UsersRepository;
