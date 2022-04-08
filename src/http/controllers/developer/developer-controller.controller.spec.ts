import { Test, TestingModule } from '@nestjs/testing';
import { DeveloperControllerController } from './developer-controller.controller';

describe('DeveloperControllerController', () => {
  let controller: DeveloperControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeveloperControllerController],
    }).compile();

    controller = module.get<DeveloperControllerController>(DeveloperControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
