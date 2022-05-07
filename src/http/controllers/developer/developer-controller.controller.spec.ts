import { Test, TestingModule } from '@nestjs/testing';
import { CreateDeveloperUseCaseStub } from '../../../../test/core/usecases/create-developer-use-case.stub';
import { CreateDeveloperUseCase } from '../../../core/usecases/create-developer-use-case';
import { DeveloperController } from './developer.controller';

describe('DeveloperControllerController', () => {
  let controller: DeveloperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CreateDeveloperUseCase,
          useClass: CreateDeveloperUseCaseStub,
        },
      ],
      controllers: [DeveloperController],
    }).compile();

    controller = module.get<DeveloperController>(DeveloperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call the use case', async () => {
      const useCaseSpy = jest.spyOn(
        CreateDeveloperUseCaseStub.prototype,
        'handle',
      );
      const params = {
        name: 'name',
        email: 'email',
        password: 'password',
        githubProfile: 'githubProfile',
      };

      await controller.create(params);

      expect(useCaseSpy).toHaveBeenCalledWith(params);
    });
  });
});
