import { User } from './User.entity';
import { UserDto } from './User.dto';
import { UserRepository } from './User.repository';

export class UserService {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(userDto: UserDto): Promise<UserDto> {
    const user = this.convertToEntity(userDto);

    user.id = 0;

    const save = await this.userRepository.create(user);
    return this.convertToDto(save);
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.userRepository.findAll();
    return users.map(this.convertToDto);
  }

  private convertToDto(user: User): UserDto {
    const dto = new UserDto();
    dto.id = user.id;
    dto.firstName = user.firstName;
    dto.lastName = user.lastName;
    dto.age = user.age;
    return dto;
  }

  private convertToEntity(dto: UserDto): User {
    const user = new User();
    user.id = dto.id;
    user.firstName = dto.firstName;
    user.lastName = dto.lastName;
    user.age = dto.age;
    return user;
  }
}
