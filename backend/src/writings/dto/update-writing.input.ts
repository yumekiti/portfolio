import { CreateWritingInput } from './create-writing.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWritingInput extends PartialType(CreateWritingInput) {
  @Field(() => Int)
  id: number;
}
