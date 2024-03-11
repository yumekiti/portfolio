import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Stack {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
