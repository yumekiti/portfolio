import { Module } from '@nestjs/common';
import { StackService } from './stack.service';
import { StackResolver } from './stack.resolver';

@Module({
  providers: [StackResolver, StackService],
})
export class StackModule {}
