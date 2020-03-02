import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  enabled: boolean;

  @Column({ default: true })
  activated: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @Column()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column()
  usergroup: string;

  @Column()
  lastVisit: Date;

  @Column()
  registered: Date;

  @Column({ default: false })
  deleted: boolean;
}
