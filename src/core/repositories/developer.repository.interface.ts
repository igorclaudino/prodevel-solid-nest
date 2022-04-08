import { Developer } from '../entities/developer.entity';

export const DEVELOPER_REPOSITORY_TOKEN = 'DEVELOPER_REPOSITORY_TOKEN';

export interface IDeveloperRepository {
  create(developer: Developer): Promise<Developer>;
}
