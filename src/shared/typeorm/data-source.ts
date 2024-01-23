
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
  entities: [Person],
  subscribers: [],
  migrations: [],


})
export {dataSource}
