import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { WritingsModule } from './writings/writings.module';
import { StacksModule } from './stacks/stacks.module';
import { TimelinesModule } from './timelines/timelines.module';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'database',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    WritingsModule,
    StacksModule,
    TimelinesModule,
    PortfoliosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
