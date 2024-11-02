import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity("user")
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({
    type: "varchar",
    length: 255,
    collation: "utf8mb4_unicode_ci"
  })
  firstName!: string;

  @Field()
  @Column({
    type: "varchar",
    length: 255,
    collation: "utf8mb4_unicode_ci"
  })
  lastName!: string;

  @Field()
  @Column({
    type: "varchar",
    length: 255,
    unique: true,
    collation: "utf8mb4_unicode_ci"
  })
  email!: string;

  @Column({
    type: "varchar",
    length: 255,
    collation: "utf8mb4_unicode_ci"
  })
  password!: string;
} 