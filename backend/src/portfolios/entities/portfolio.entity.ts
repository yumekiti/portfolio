import { ObjectType, Field, Int } from '@nestjs/graphql';
import { OneToMany, ManyToOne, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Generated } from 'typeorm';

import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

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
  @Field(() => String)
  date: string;

  @Column()
  @Field()
  thumbnail: string;

  @OneToMany(() => PortfolioImage, image => image.portfolio, { nullable: true })
  @Field(() => [PortfolioImage])
  images: PortfolioImage[];

  @OneToMany(() => PortfolioLink, link => link.portfolio)
  @Field(() => [PortfolioLink], { nullable: true })
  links: PortfolioLink[];

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
  image: string;

  @ManyToOne(() => Portfolio, portfolio => portfolio.images)
  @Field(() => Portfolio)
  portfolio: Portfolio;
}

@Entity()
@ObjectType()
export class PortfolioLink {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  emoji: string;

  @Column()
  @Field()
  link: string;

  @ManyToOne(() => Portfolio, portfolio => portfolio.links)
  @Field(() => Portfolio)
  portfolio: Portfolio;
}