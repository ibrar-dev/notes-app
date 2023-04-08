import { Test, TestingModule } from '@nestjs/testing';
import { AppliedJobsController } from './applied-jobs.controller';
import { AppliedJobsService } from './applied-jobs.service';

describe('AppliedJobsController', () => {
  let controller: AppliedJobsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppliedJobsController],
      providers: [AppliedJobsService],
    }).compile();

    controller = module.get<AppliedJobsController>(AppliedJobsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
