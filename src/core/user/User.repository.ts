import { User } from './User.entity';

export class UserRepository {
  constructor() {}

  create(user: User): Promise<User> {
    return user.save();
  }

  update(user: User): Promise<User> {
    return user.save();
  }

  findById(id: number): Promise<User | undefined> {
    return User.findOne(id);
  }

  findAll(): Promise<User[]> {
    return User.find();
  }
}
