import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm/browser";

@Entity("Customers")
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  customerCode: string;

  @Column()
  customerName: string;

  @Column()
  customerContactNumber: string;

  @Column()
  customerEmail: string;

  @Column("date")
  createdAt: Date;

  @Column("date", { nullable: true })
  updatedAt: Date;
}
