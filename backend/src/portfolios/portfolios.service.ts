import { Injectable } from '@nestjs/common';
import { CreatePortfolioInput, CreatePortfolioImageInput } from './dto/create-portfolio.input';
import { UpdatePortfolioInput } from './dto/update-portfolio.input';
import { Portfolio, PortfolioImage } from './entities/portfolio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PortfoliosService {
  constructor(
    @InjectRepository(Portfolio)
    private portfolioRepository: Repository<Portfolio>,
    @InjectRepository(PortfolioImage)
    private portfolioImageRepository: Repository<PortfolioImage>,
  ) {}

  async create(createPortfolioInput: CreatePortfolioInput): Promise<Portfolio> {
    const portfolio = this.portfolioRepository.create(createPortfolioInput);
    
    if (createPortfolioInput.images) {
      const images = createPortfolioInput.images.map(image => this.portfolioImageRepository.create(image));
      portfolio.images = await this.portfolioImageRepository.save(images);
    }

    return this.portfolioRepository.save(portfolio);
  }

  async findAll(): Promise<Portfolio[]> {
    return this.portfolioRepository.find({ relations: ['images'], order: { createdAt: 'DESC' } });
  }

  async findOne(id: number): Promise<Portfolio> {
    return this.portfolioRepository.findOne({ where: { id }, relations: ['images'] });
  }

  async update(id: number, updatePortfolioInput: UpdatePortfolioInput): Promise<Portfolio> {
    const portfolio = await this.portfolioRepository.findOne({ where: { id }, relations: ['images'] });
    if (!portfolio) return null;

    const updatedPortfolio = this.portfolioRepository.merge(portfolio, updatePortfolioInput);
    if (updatePortfolioInput.images) {
      const images = updatePortfolioInput.images.map(image => this.portfolioImageRepository.create(image));
      updatedPortfolio.images = await this.portfolioImageRepository.save(images);
    }

    return this.portfolioRepository.save(updatedPortfolio);
  }

  async remove(id: number): Promise<Portfolio> {
    const portfolio = await this.portfolioRepository.findOne({ where: { id }, relations: ['images'] });
    if (!portfolio) return null;
    return this.portfolioRepository.remove(portfolio);
  }
}
