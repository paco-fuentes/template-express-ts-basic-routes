import "reflect-metadata"
import { DataSource } from "typeorm"
import { Test1697905549856 } from "./migration/1697905549856-test"
import { Test } from "./models/Test"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "testDB",
    entities: [Test],
    migrations: [Test1697905549856],
    synchronize: false,
    logging: false,
})

// export { AppDataSource };