import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TimelineService } from './timeline.service';
import { Timeline } from './entities/timeline.entity';
import { CreateTimelineInput } from './dto/create-timeline.input';
import { UpdateTimelineInput } from './dto/update-timeline.input';

@Resolver(() => Timeline)
export class TimelineResolver {
  constructor(private readonly timelineService: TimelineService) {}

  @Mutation(() => Timeline)
  createTimeline(@Args('createTimelineInput') createTimelineInput: CreateTimelineInput) {
    return this.timelineService.create(createTimelineInput);
  }

  @Query(() => [Timeline], { name: 'timeline' })
  findAll() {
    return this.timelineService.findAll();
  }

  @Query(() => Timeline, { name: 'timeline' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.timelineService.findOne(id);
  }

  @Mutation(() => Timeline)
  updateTimeline(@Args('updateTimelineInput') updateTimelineInput: UpdateTimelineInput) {
    return this.timelineService.update(updateTimelineInput.id, updateTimelineInput);
  }

  @Mutation(() => Timeline)
  removeTimeline(@Args('id', { type: () => Int }) id: number) {
    return this.timelineService.remove(id);
  }
}
