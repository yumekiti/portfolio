import { Injectable } from '@nestjs/common';
import { CreateTimelineInput } from './dto/create-timeline.input';
import { UpdateTimelineInput } from './dto/update-timeline.input';

@Injectable()
export class TimelineService {
  create(createTimelineInput: CreateTimelineInput) {
    return 'This action adds a new timeline';
  }

  findAll() {
    return `This action returns all timeline`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timeline`;
  }

  update(id: number, updateTimelineInput: UpdateTimelineInput) {
    return `This action updates a #${id} timeline`;
  }

  remove(id: number) {
    return `This action removes a #${id} timeline`;
  }
}
