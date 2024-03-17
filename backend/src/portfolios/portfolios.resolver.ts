import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PortfoliosService } from './portfolios.service';
import { Portfolio } from './entities/portfolio.entity';
import { CreatePortfolioInput } from './dto/create-portfolio.input';
import { UpdatePortfolioInput } from './dto/update-portfolio.input';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from 'graphql-upload/GraphQLUpload.js';

@Resolver(() => Portfolio)
export class PortfoliosResolver {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  @Mutation(() => Portfolio)
  async createPortfolio(
    @Args('createPortfolioInput') createPortfolioInput: CreatePortfolioInput,
    @Args({ name: 'thumbnail', type: () => GraphQLUpload }) thumbnail: FileUpload,
    @Args({ name: 'images', type: () => [GraphQLUpload] }) images: FileUpload,
  ) {
    if (thumbnail) {
      createPortfolioInput.thumbnail = await this.portfoliosService.saveImage(thumbnail);
    };

    return this.portfoliosService.create(createPortfolioInput);
  }

  @Query(() => [Portfolio], { name: 'portfolios' })
  findAll() {
    return this.portfoliosService.findAll();
  }

  @Query(() => Portfolio, { name: 'portfolio' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.portfoliosService.findOne(id);
  }

  @Mutation(() => Portfolio)
  updatePortfolio(@Args('updatePortfolioInput') updatePortfolioInput: UpdatePortfolioInput) {
    return this.portfoliosService.update(updatePortfolioInput.id, updatePortfolioInput);
  }

  @Mutation(() => Portfolio)
  removePortfolio(@Args('id', { type: () => Int }) id: number) {
    return this.portfoliosService.remove(id);
  }
}
