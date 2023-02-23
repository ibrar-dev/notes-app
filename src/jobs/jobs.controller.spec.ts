import { Test, TestingModule } from '@nestjs/testing';
import { TourController } from './jobs.controller';
import { TourService } from './jobs.service';

describe('TourController', () => {
  let controller: TourController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TourController],
      providers: [TourService],
    }).compile();

    controller = module.get<TourController>(TourController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
