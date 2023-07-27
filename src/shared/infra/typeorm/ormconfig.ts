import { DataSource, DatabaseType } from "typeorm";
// import {ConnectionOptions, DatabaseType} from 'typeorm';    

// const dataBaseType: DatabaseType = process.env.DATABASE_URL;
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
  entities: ["./src/shared/typeorm/migrations/*.ts"],
  migrations: ["./src/shared/typeorm/migrations/*.ts"],
});

// export const dataSource2 = new DataSource({
//   type: "postgres",
//   host: "silly.db.elephantsql.com",
//   port: 5432,
//   username: "wltlahct",
//   password: "KhqY_0AaNcHa6-RPRxeceeu3rtmtpJfM",
//   database: "wltlahct",
//   extra: {
//     ssl: "true",
//   },
//   synchronize: true,
//   logging: true,
//   entities: ["./src/shared/typeorm/migrations/*.ts"],
//   migrations: ["./src/shared/typeorm/migrations/*.ts"],
// });

// export const dataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "docker",
//   database: "apivendas",
//   entities: ["./src/shared/typeorm/migrations/*.ts"],
//   migrations: ["./src/shared/typeorm/migrations/*.ts"],
// });
