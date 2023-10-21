import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Test1697905549856 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tests",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "testString1",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "testString2",
                        type: "varchar",
                        length: "255",
                    }
                ],
            }),
            true
        ); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropTable("tests");
    }

}
