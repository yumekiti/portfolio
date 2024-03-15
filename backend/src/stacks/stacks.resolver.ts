import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StacksService } from './stacks.service';
import { Stack } from './entities/stack.entity';
import { CreateStackInput } from './dto/create-stack.input';
import { UpdateStackInput } from './dto/update-stack.input';

@Resolver(() => Stack)
export class StacksResolver {
  constructor(private readonly stacksService: StacksService) {}

  @Mutation(() => Stack)
  createStack(@Args('createStackInput') createStackInput: CreateStackInput) {
    return this.stacksService.create(createStackInput);
  }

  @Query(() => [Stack], { name: 'stacks' })
  findAll() {
    return this.stacksService.findAll();
  }

  @Query(() => Stack, { name: 'stack' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stacksService.findOne(id);
  }

  @Mutation(() => Stack)
  updateStack(@Args('updateStackInput') updateStackInput: UpdateStackInput) {
    return this.stacksService.update(updateStackInput.id, updateStackInput);
  }

  @Mutation(() => Stack)
  removeStack(@Args('id', { type: () => Int }) id: number) {
    return this.stacksService.remove(id);
  }
}
