import { Entity } from './entity';

interface DeveloperProps {
  name: string;
  email: string;
  password: string;
  githubProfile: string;
}

export class Developer extends Entity<DeveloperProps> {
  constructor(props: DeveloperProps, id?: string) {
    super(props, id);
  }

  static create(props: DeveloperProps, id?: string): Developer {
    return new Developer(props, id);
  }
}
