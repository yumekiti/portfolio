import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WritingsService } from './writings.service';
import { Writing } from './entities/writing.entity';
import { CreateWritingInput } from './dto/create-writing.input';
import { UpdateWritingInput } from './dto/update-writing.input';

@Resolver(() => Writing)
export class WritingsResolver {
  constructor(private readonly writingsService: WritingsService) {}

  @Mutation(() => Writing)
  createWriting(@Args('createWritingInput') createWritingInput: CreateWritingInput) {
    return this.writingsService.create(createWritingInput);
  }

  @Query(() => [Writing], { name: 'writings' })
  findAll() {
    return this.writingsService.findAll();
  }

  @Query(() => Writing, { name: 'writing' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.writingsService.findOne(id);
  }

  @Mutation(() => Writing)
  updateWriting(@Args('updateWritingInput') updateWritingInput: UpdateWritingInput) {
    return this.writingsService.update(updateWritingInput.id, updateWritingInput);
  }

  @Mutation(() => Writing)
  removeWriting(@Args('id', { type: () => Int }) id: number) {
    return this.writingsService.remove(id);
  }
}
