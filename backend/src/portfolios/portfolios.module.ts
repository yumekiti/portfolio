import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosResolver } from './portfolios.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portfolio, PortfolioImage, PortfolioLink } from './entities/portfolio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Portfolio, PortfolioImage, PortfolioLink])],
  providers: [PortfoliosResolver, PortfoliosService],
})
export class PortfoliosModule {}
