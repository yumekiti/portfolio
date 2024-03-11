import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AboutService } from './about.service';
import { About } from './entities/about.entity';
import { CreateAboutInput } from './dto/create-about.input';
import { UpdateAboutInput } from './dto/update-about.input';

@Resolver(() => About)
export class AboutResolver {
  constructor(private readonly aboutService: AboutService) {}

  @Mutation(() => About)
  createAbout(@Args('createAboutInput') createAboutInput: CreateAboutInput) {
    return this.aboutService.create(createAboutInput);
  }

  @Query(() => [About], { name: 'about' })
  findAll() {
    return this.aboutService.findAll();
  }

  @Query(() => About, { name: 'about' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.aboutService.findOne(id);
  }

  @Mutation(() => About)
  updateAbout(@Args('updateAboutInput') updateAboutInput: UpdateAboutInput) {
    return this.aboutService.update(updateAboutInput.id, updateAboutInput);
  }

  @Mutation(() => About)
  removeAbout(@Args('id', { type: () => Int }) id: number) {
    return this.aboutService.remove(id);
  }
}
