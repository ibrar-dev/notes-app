import { join } from 'path';

import * as dotenv from 'dotenv';
dotenv.config();
const config = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [join(__dirname, './libs/entities/*.entity{.ts,.js}')],
  synchronize: false,

  migrationsRun: false,
  logging: true,
  migrations: [join(__dirname, './migrations/**/*{.ts,.js}')],
};

export = config;
