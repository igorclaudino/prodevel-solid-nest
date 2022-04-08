import { Developer } from '../../core/entities/developer.entity';
import { IDeveloperRepository } from '../../core/repositories/developer.repository.interface';

export class DeveloperRepository implements IDeveloperRepository {
  async create(developer: Developer): Promise<Developer> {
    return developer;
  }
}
