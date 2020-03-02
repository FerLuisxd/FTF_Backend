import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';

@Injectable()
export class UserRepository {
     private usersRepository
    constructor(

      ) {}
    
      findAll(): Promise<any[]> {
        return new Promise( (resolve, err)=>{
            resolve( [
                {
                    email:'hi'
                }
            ])
        }
           )
        //return this.usersRepository.find();
      }
    
      findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
      }
    
      async removeOne(id: string): Promise<void> {
        await this.usersRepository.delete(id);
      }
}
