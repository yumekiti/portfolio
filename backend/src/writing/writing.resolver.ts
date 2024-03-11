import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WritingService } from './writing.service';
import { Writing } from './entities/writing.entity';
import { CreateWritingInput } from './dto/create-writing.input';
import { UpdateWritingInput } from './dto/update-writing.input';

@Resolver(() => Writing)
export class WritingResolver {
  constructor(private readonly writingService: WritingService) {}

  @Mutation(() => Writing)
  createWriting(@Args('createWritingInput') createWritingInput: CreateWritingInput) {
    return this.writingService.create(createWritingInput);
  }

  @Query(() => [Writing], { name: 'writing' })
  findAll() {
    return this.writingService.findAll();
  }

  @Query(() => Writing, { name: 'writing' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.writingService.findOne(id);
  }

  @Mutation(() => Writing)
  updateWriting(@Args('updateWritingInput') updateWritingInput: UpdateWritingInput) {
    return this.writingService.update(updateWritingInput.id, updateWritingInput);
  }

  @Mutation(() => Writing)
  removeWriting(@Args('id', { type: () => Int }) id: number) {
    return this.writingService.remove(id);
  }
}
