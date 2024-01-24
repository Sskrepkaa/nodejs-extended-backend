import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  // imports: [],
  controllers: [AppController],
  providers: [AppService],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'sskrepkaamac',
      password: 'root',
      database: 'test-node',
      models: [],
      autoLoadModels: true
    }),
  ],
})
export class AppModule {}
