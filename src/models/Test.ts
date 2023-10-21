import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("test")
export class Test extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    testString1!: string

    @Column()
    testString2!: string

}
