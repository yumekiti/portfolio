import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class About {
  // name: string;
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;
  // introduction: string;
  // site description: string;
  // createdAt: Date;
  // updatedAt: Date;
}
