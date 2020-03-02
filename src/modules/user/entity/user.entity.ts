import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:true})
  enabled:boolean

  @Column({default:true})
  activated:boolean


  @Column()
  name:string

  @Column()
  username:string

  @Column()
  email:string

  @Column()
  usergroup:string
  
  @Column()
  lastVisit:Date

  @Column()
  registered:Date

  @Column({default:false})
  deleted:boolean

}