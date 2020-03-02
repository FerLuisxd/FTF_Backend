import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    let users = await this.usersRepository.find();
    return users.filter(x=>x.deleted==false)
  }
  async findOne(id: string): Promise<User> {
    let response = await  this.usersRepository.findOne(id);
    if(response.deleted){
      throw new HttpException('', HttpStatus.NOT_FOUND)
    }
    return response
  }
  findOneByMail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email: email });
  }

  async removeOne(id: string): Promise<void> {
    let user = await this.findOne(id);
    if (user) {
      user.deleted = true;
      await this.usersRepository.save(user);
    }
    throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
  }
  async newOne(body: User) {
    let user = await this.findOneByMail(body.email);
    if (user) {
      throw new HttpException('User alredy exists', HttpStatus.BAD_REQUEST);
    }
    let date: Date = new Date();
    date = new Date(date.setHours(date.getHours() - 5));
    body.registered = date;
    body.lastVisit = date;
    body.enabled = true
    body.activated =true
    return this.usersRepository.save(body);
  }
  async updateOne(id: string, body: User) {
    let user = await this.findOne(id);
    if (user) {
      return this.usersRepository.save(body);
    }
    throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
  }
}
