import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StackService } from './stack.service';
import { Stack } from './entities/stack.entity';
import { CreateStackInput } from './dto/create-stack.input';
import { UpdateStackInput } from './dto/update-stack.input';

@Resolver(() => Stack)
export class StackResolver {
  constructor(private readonly stackService: StackService) {}

  @Mutation(() => Stack)
  createStack(@Args('createStackInput') createStackInput: CreateStackInput) {
    return this.stackService.create(createStackInput);
  }

  @Query(() => [Stack], { name: 'stack' })
  findAll() {
    return this.stackService.findAll();
  }

  @Query(() => Stack, { name: 'stack' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stackService.findOne(id);
  }

  @Mutation(() => Stack)
  updateStack(@Args('updateStackInput') updateStackInput: UpdateStackInput) {
    return this.stackService.update(updateStackInput.id, updateStackInput);
  }

  @Mutation(() => Stack)
  removeStack(@Args('id', { type: () => Int }) id: number) {
    return this.stackService.remove(id);
  }
}
