import "reflect-metadata"
import { DataSource } from "typeorm"
// IMPORT MIGRATION
// IMPORT ENTITY

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "YOURDATABASE",
    entities: [YOURMODELCLASS],
    migrations: [YOURMIGRATION],
    synchronize: false,
    logging: false,
})

// export { AppDataSource };