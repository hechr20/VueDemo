<template>
    <div class="container">
      <div class="top">
        <div class="header" style="margin:auto;width:50%">
          <h1>Register user:</h1>
        </div>
      </div>
      <form>
        <table style="margin:auto;width:80%;">
          <tr>
            <td>
              <text-box 
                v-model="user.username" 
                :placeholder="labelUserName"
                :label="labelUserName" 
                style="width:50%">
              </text-box>
            </td>
          </tr>
          <tr>
            <td>
              <text-box 
                v-model="user.password" 
                :placeholder="labelPassword"
                :label="labelPassword" 
                style="width:50%">
              </text-box>
            </td>
          </tr>
          <tr>
            <td>
              <text-box 
                v-model="user.firstName" 
                :placeholder="labelFirstName"
                :label="labelFirstName" 
                style="width:50%">
              </text-box>
            </td>
          </tr>
          <tr>
            <td>
              <text-box 
                v-model="user.lastName" 
                :placeholder="labelLastName" 
                :label="labelLastName" 
                style="width:50%">
              </text-box>
            </td>
          </tr>
          <tr>
            <td>
              <text-box 
                v-model="user.email" 
                :placeholder="labelEmail" 
                :label="labelEmail" 
                style="width:30%">
              </text-box>
            </td>
          </tr>     
          <tr>
            <td style="text-align:center">
              <button class="btn-primary" :disabled="registerUser" @click="submitRegister">Register</button>
              <img v-show="registerUser" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            </td>
          </tr>
          <tr>
            <td style="color:red;text-align: center;">
              {{errorMessage}}
            </td>
          </tr>
        </table>
      </form>
    </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from "vue-property-decorator";
  import DateBox from '@/components/input/DateBox.vue'
  import NumBox from '@/components/input/NumBox.vue'
  import TextBox from '@/components/input/TextBox.vue'
  import DropDown from '@/components/input/DropDown.vue'
  import {User} from "@/store/modules/account/types";

  @Component({
      components:{
        DateBox,
        NumBox,
        TextBox,
        DropDown
      }
    }
  )
  export default class RegisterUser extends Vue {
    errorMessage:string=''
    labelUserName:string="User Name"
    labelFirstName:string="First Name"
    labelLastName:string="Last Name"
    labelPassword:string="Password"
    labelEmail:string="Email"
    user:User={
      id:0,
      firstName:'', 
      lastName:'', 
      username:'',
      password:'',
      email:'',
      deleting:false
    }
    registerUser:boolean=false
    get getLastname(){
      return this.$store.getters['account/lastName'];
    }
    mounted() {
      this.user.firstName= this.$store.getters['account/firstName'];
      this.user.lastName= this.$store.getters['account/lastName'];
    }
    async submitRegister () {
      this.registerUser=true;
      this.errorMessage='';
      await this.$store.dispatch('account/register', JSON.stringify(this.user));
      this.registerUser=false;
      if(this.$store.getters['message/message'] !== 'Registration successful')
      {
        this.errorMessage=this.$store.getters['message/message']
      }
    }        
}
</script>   

<style scoped>
.header{
  text-align: center;
}
.div{
  position: absolute;
  width: 80%;
  border: 2px solid black;
  padding: 20px;
  margin: 20px;
}
.btn-primary{
  margin: auto;
  background-color:black;
  color: white;
  font-size: 12px;
  height: 50px;
  width: 120px;
}
</style>
