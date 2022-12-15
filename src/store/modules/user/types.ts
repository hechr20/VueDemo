import { User } from '../account/types'

  export interface Users {
    users:User[];
  }
  
  export interface UsersState {
    users: User[];
    error?:string;
  }