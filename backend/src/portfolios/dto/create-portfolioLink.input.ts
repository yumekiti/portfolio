import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PortfolioLinkInput {
  @Field()
  title: string;

  @Field()
  emoji: string;

  @Field()
  link: string;
}