import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWritingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
