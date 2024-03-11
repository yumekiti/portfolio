import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTimelineInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
