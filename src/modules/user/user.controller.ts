import {
  Controller,
  Get,
  Delete,
  Put,
  Post,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List users',
    type: User,
    isArray: true,
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List one user',
    type: User,
  })
  findOne(@Param('id') id) {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Add one user',
    type: User,
  })
  newOne(@Body() body: User) {
    return this.userService.newOne(body);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Updates one user',
    type: User,
  })
  updateOne(@Param('id') id, @Body() body: User) {
    return this.userService.updateOne(id, body);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, description: 'Deletes one user' })
  removeOne(@Param('id') id) {
    console.log("id",id)
    return this.userService.removeOne(id);
  }
}
