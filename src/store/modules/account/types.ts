  export interface User {
    id:number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    username:string;
    password:string;
    deleting:boolean;
  }

  export interface AccountState {
    user?: User|null;
    loggedIn?:boolean,
    error: boolean;
  }

  // export default class UserClass{
  //   id:number=0;
  //   firstName: string='';
  //   lastName: string='';
  //   email: string='';
  //   phone?: string='';
  //   username:string='';
  //   password:string='';
  //   deleting:boolean=false;
  // }
