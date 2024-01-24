
import {DataSource} from 'typeorm'
import { Person } from './models/person'
const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Lucas&Clara2907",
  database: "postgres",
  synchronize: true,
  logging: true,
  
  subscribers: [],
  migrations: [
    "./src/shared/typeorm/migrations/*.ts"
  ],
  migrationsTableName: "custom_migration_table",



})
export {dataSource}
