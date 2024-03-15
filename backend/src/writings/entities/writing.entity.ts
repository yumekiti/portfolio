import { ObjectType, Field, Int } from '@nestjs/graphql';
import { OneToMany, ManyToOne, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Generated } from 'typeorm';

@ObjectType()
export class Writing {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  content: string;

  @Field(() => Int)
  @Column({ default: 0 })
  views: number;

  @Field(() => String)
  @Column()
  @Generated("uuid")
  uuid: string;

  @Field(() => Date)
  @CreateDateColumn()
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updated_at: Date;
}
