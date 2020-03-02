import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:true})
  enabled:boolean

  @Column({default:true})
  activated:boolean

  @IsNotEmpty()
  @IsString()
  @Column()
  name:string

  @IsNotEmpty()
  @IsString()
  @Column()
  username:string

  @IsNotEmpty()
  @IsEmail()
  @Column()
  email:string

  @IsNotEmpty()
  @IsString()
  @Column()
  usergroup:string
  
  @Column()
  lastVisit:Date

  @Column()
  registered:Date

  @Column({default:false})
  deleted:boolean

}