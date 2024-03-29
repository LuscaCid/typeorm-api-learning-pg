import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1706055576844 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name : "products",
        columns : [
          {
            name : "id",
            type : "uuid",
            isPrimary : true,
            generationStrategy : "uuid"

          },
          {
            name : "name",
            type : "varchar"
          },
          {
            name : "price",
            type : "decimal",
            precision : 10,
            scale : 2
          },
          {
            name : "quantity",
            type : "int"
          },
          {
            name : "created_at",
            type : "timestamp",
            default : "now()"
          }

        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("products")
    }

}
