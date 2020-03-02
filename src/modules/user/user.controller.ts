import { Controller, Get, Delete, Put, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.userService.findOne(id);
  }

  @Post()
  newOne(@Body() body:User) {
    return this.userService.newOne(body);
  }

  @Put(':id')
  updateOne(@Param('id') id,@Body() body:User) {
    return this.userService.updateOne(id,body);
  }

  @Delete(':id')
  removeOne(@Param('id') id) {
    return this.userService.removeOne(id);
  }
}