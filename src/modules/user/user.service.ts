import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly usersRepository: UserRepository
  ) {}

  findAll() {
    return this.usersRepository.findAll()
  }
  findOne(id) {
    return 'Hello World!';
  }
  newOne(body) {
    return 'Hello World!';
  }
  updateOne(id,body) {
    return 'Hello World!';
  }
  removeOne(id) {
    return 'Hello World!';
  }
}
