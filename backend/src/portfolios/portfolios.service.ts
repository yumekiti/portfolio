import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePortfolioInput } from './dto/create-portfolio.input';
import { UpdatePortfolioInput } from './dto/update-portfolio.input';
import { Portfolio, PortfolioImage } from './entities/portfolio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { createWriteStream } from 'fs';

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
    return this.portfolioRepository.save({ ...portfolio, ...updatePortfolioInput });
  }

  async remove(id: number): Promise<Portfolio> {
    const portfolio = await this.portfolioRepository.findOne({ where: { id }, relations: ['images'] });
    if (!portfolio) return null;
    return this.portfolioRepository.remove(portfolio);
  }

  async uploadImage(file: Express.Multer.File, portfolioId: number): Promise<PortfolioImage> {
    const portfolio = await this.portfolioRepository.findOne({ where: { id: portfolioId } });
    if (!portfolio) return null;
    const image = this.portfolioImageRepository.create({ portfolio, image: file.filename });
    return this.portfolioImageRepository.save(image);
  }

  async saveImage(image: {
    createReadStream: () => any;
    filename: string;
    mimetype: string;
  }) {
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validImageTypes.includes(image.mimetype)) {
      throw new BadRequestException({ image: 'Invalid image type' });
    }

    const imageName = `${Date.now()}-${image.filename}`;
    const imagePath = `/images/${imageName}`;
    const stream = image.createReadStream();
    const outputPath = `public${imagePath}`;
    const writeStream = createWriteStream(outputPath);
    stream.pipe(writeStream);

    await new Promise((resolve, reject) => {
      stream.on('end', resolve);
      stream.on('error', reject);
    });

    return imagePath;
  }
}
