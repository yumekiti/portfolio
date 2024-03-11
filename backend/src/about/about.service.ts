import { Injectable } from '@nestjs/common';
import { CreateAboutInput } from './dto/create-about.input';
import { UpdateAboutInput } from './dto/update-about.input';

@Injectable()
export class AboutService {
  create(createAboutInput: CreateAboutInput) {
    return 'This action adds a new about';
  }

  findAll() {
    return `This action returns all about`;
  }

  findOne(id: number) {
    return `This action returns a #${id} about`;
  }

  update(id: number, updateAboutInput: UpdateAboutInput) {
    return `This action updates a #${id} about`;
  }

  remove(id: number) {
    return `This action removes a #${id} about`;
  }
}
