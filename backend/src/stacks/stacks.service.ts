import { Injectable } from '@nestjs/common';
import { CreateStackInput } from './dto/create-stack.input';
import { UpdateStackInput } from './dto/update-stack.input';

@Injectable()
export class StacksService {
  create(createStackInput: CreateStackInput) {
    return 'This action adds a new stack';
  }

  findAll() {
    return `This action returns all stacks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stack`;
  }

  update(id: number, updateStackInput: UpdateStackInput) {
    return `This action updates a #${id} stack`;
  }

  remove(id: number) {
    return `This action removes a #${id} stack`;
  }
}
