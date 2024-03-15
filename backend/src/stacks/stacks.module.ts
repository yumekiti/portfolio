import { Module } from '@nestjs/common';
import { StacksService } from './stacks.service';
import { StacksResolver } from './stacks.resolver';

@Module({
  providers: [StacksResolver, StacksService],
})
export class StacksModule {}
