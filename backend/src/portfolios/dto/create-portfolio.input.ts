import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePortfolioInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  thumbnail: string;

  @Field(() => [CreatePortfolioImageInput])
  images: CreatePortfolioImageInput[];

  @Field()
  links: string;
}

@InputType()
export class CreatePortfolioImageInput {
  @Field()
  url: string;
}