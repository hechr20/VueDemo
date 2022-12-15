<template>
    <div class="container">
      <div class="content">
        <div class="top">
          <div class="header">
              <h1>Demo login - all attempts are accepted</h1>
          </div>
        </div>
        <div style="margin:auto;width:80%;">
            <v-form
                ref="form"
                lazy-validation
            >
                <v-text-field
                  v-model="userName"
                  :counter="10"
                  label="Username"
                  required                
                >
                </v-text-field>

                <v-text-field
                  v-model="password"
                  label="Password"
                  required
                ></v-text-field>

                <v-btn
                    color="error"
                    class="mr-4"
                    @click="login"
                >
                Login
                </v-btn>
                <div>
                  <br><br>
                  <a @click="RegisterNewUser()">Register new user</a>
                </div>
            </v-form>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue,Inject } from 'vue-property-decorator';

@Component({
  components:{}
})
export default class Login extends Vue {
  userName:string=''
  password:string=''
  async login(){
      console.log(this.userName);
      await this.$store.dispatch('account/login', {username:this.userName, password:this.password} )
  }
  rules={
    userName: [
      { required: true, message: 'UserNameRequired', trigger: 'blur' }
    ],
    password: [
      { required: true, message: 'PasswordRequired', trigger: 'blur' }
    ]
  }
  RegisterNewUser(){
    this.$router.replace({path: '/registerUser'});
  }
  created(){
  }
}
</script>

<style scoped>  
    .container1{
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      min-height: 100%;
      background:transparent;
    }
    .content1{
      padding: 32px 0;
      -ms-flex: 1 1 0%;
      flex: 1 1 0%;
    }
    .main1{
      width: 368px;
      margin: 0 auto;
    }
    .top1{
      text-align: center
    }
    .header1{
      height: 44px;
      line-height: 44px;
    }
    .title{
      font-size: 33px;
      color: rgba(0,0,0,.85);
      font-family: "Myriad Pro","Helvetica Neue",Arial,Helvetica,sans-serif;
      font-weight: 600;
      position: relative;
      top: 2px;
    }</style>

