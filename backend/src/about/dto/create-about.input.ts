import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAboutInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
