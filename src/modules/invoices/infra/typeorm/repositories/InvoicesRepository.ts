import { IInvoice } from "@modules/invoices/domain/models/IInvoice";
import { IInvoicesRepository } from "@modules/invoices/domain/repositories/IInvoicesRepository";
import { Repository } from "typeorm";
import Invoice from "../entities/Invoice";
import { dataSource } from "@shared/infra/typeorm/ormconfig";

class InvoicesRepository implements IInvoicesRepository {
  private ormRepository: Repository<Invoice>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Invoice);
  }

  public async findAll(): Promise<IInvoice[]> {
    const invoices = await this.ormRepository
      .createQueryBuilder()
      .select(["client", "reference", "date"])
      .groupBy("client, date, reference")
      .orderBy({ date: "DESC" })
      .getRawMany();

    return invoices;
  }

  public async findByClient(
    client: string,
    referencemonth: string,
    referenceyear: string
  ): Promise<IInvoice | null> {
    const invoice = await this.ormRepository
      .createQueryBuilder()
      .where("client = :client ", { client })
      .andWhere("referencemonth = :referencemonth", { referencemonth })
      .andWhere("referenceyear = :referenceyear", { referenceyear })
      .getOne();

    return invoice;
  }

  public async saveInvoice(invoice: IInvoice): Promise<IInvoice> {
    await this.ormRepository.save(invoice);

    return invoice;
  }
}

export default InvoicesRepository;
