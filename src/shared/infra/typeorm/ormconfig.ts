import { DataSource, DatabaseType } from "typeorm";
import Invoice from '@modules/invoices/infra/typeorm/entities/Invoice';

export const dataSource = new DataSource({
  type: process.env.DATABASE_TYPE as DatabaseType as any,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT as string) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  extra: {
    ssl: process.env.DATABASE_SSL === 'true' || false,
  },
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true' || false,
  logging: process.env.DATABASE_LOGGING === 'true' || false,
  entities: [Invoice],
  migrations: ["./src/shared/typeorm/migrations/*.ts"],
});