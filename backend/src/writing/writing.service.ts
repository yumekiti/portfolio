import { Injectable } from '@nestjs/common';
import { CreateWritingInput } from './dto/create-writing.input';
import { UpdateWritingInput } from './dto/update-writing.input';

@Injectable()
export class WritingService {
  create(createWritingInput: CreateWritingInput) {
    return 'This action adds a new writing';
  }

  findAll() {
    return `This action returns all writing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} writing`;
  }

  update(id: number, updateWritingInput: UpdateWritingInput) {
    return `This action updates a #${id} writing`;
  }

  remove(id: number) {
    return `This action removes a #${id} writing`;
  }
}
