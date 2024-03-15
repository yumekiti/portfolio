import { ObjectType, Field, Int } from '@nestjs/graphql';
import { OneToMany, ManyToOne, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Generated } from 'typeorm';

@Entity()
@ObjectType()
export class Portfolio {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  thumbnail: string;

  @OneToMany(() => PortfolioImage, image => image.portfolio)
  @Field(() => [PortfolioImage])
  images: PortfolioImage[];

  @Column()
  @Field()
  links: string;

  @Column({ default: 0 })
  @Field(() => Int)
  views: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}

@Entity()
@ObjectType()
export class PortfolioImage {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  url: string;

  @ManyToOne(() => Portfolio, portfolio => portfolio.images)
  @Field(() => Portfolio)
  portfolio: Portfolio;
}