//require('dotenv').config()
import "dotenv/config"
import {DataSource} from 'typeorm'
import { Person } from './models/person'

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost", 
  port: 5432, 
  username: "postgres",
  password: `${process.env.POSTGRES_DB_PASSWORD}`,
  database: "postgres",
  synchronize: true,
  logging: true,
  entities : [Person],
  subscribers: [],
  migrations: [
    "./src/shared/typeorm/migrations/*.ts"
  ],
  migrationsTableName: "custom_migration_table",



})
export {dataSource}
