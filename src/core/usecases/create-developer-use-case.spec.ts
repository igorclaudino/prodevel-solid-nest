import { Test } from '@nestjs/testing';
import { Developer } from '../entities/developer.entity';
import {
  DEVELOPER_REPOSITORY_TOKEN,
  IDeveloperRepository,
} from '../repositories/developer.repository.interface';
import { CreateDeveloperUseCase } from './create-developer-use-case';

describe('CreateDeveloperUseCase', () => {
  let createDeveloperUseCase: CreateDeveloperUseCase;
  let developerRepository: IDeveloperRepository;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateDeveloperUseCase,
        {
          provide: DEVELOPER_REPOSITORY_TOKEN,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    createDeveloperUseCase = moduleRef.get<CreateDeveloperUseCase>(
      CreateDeveloperUseCase,
    );
    developerRepository = moduleRef.get<IDeveloperRepository>(
      DEVELOPER_REPOSITORY_TOKEN,
    );
  });
  it('should be defined', () => {
    expect(createDeveloperUseCase).toBeDefined();
  });

  it('should create a developer', async () => {
    const developerProps = {
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '123456',
      githubProfile: 'johndoe',
    };

    jest
      .spyOn(developerRepository, 'create')
      .mockResolvedValueOnce(new Developer(developerProps));

    const developer = await createDeveloperUseCase.handle(developerProps);
    expect(developer).toBeDefined();
    expect(developer.getId()).toBeDefined();
  });
});
