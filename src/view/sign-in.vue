<template>
    <div class="container">
      <div class="row">
          <div class="col-md-6 offset-md-3">
            <div>
              <div>
                <h3>Login</h3>
                <hr/>
                <form @submit.prevent="onLogin()">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model.trim="email">
                    <div class="error " v-if="errors.email">{{ errors.email }}</div>
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model.trim="password">
                    <div class="error " v-if="errors.password">{{ errors.password }}</div>
                  </div>
                  <div class="my-3">
                    <button class="btn btn-primary">Login</button>
                  </div>
                  <div class="my-4">Not Registerd Yet ? 
                    <router-link class="nav-link" to="/signup">Sign Up</router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
import SignInValidation from '@/services/validation/signin-validation';
import { SIGNIN_ACTION } from '@/store/storeconstant';
import { mapActions } from 'vuex';
export default {
    data(){
      return{
          email : '',
          password : '',
          errors : [],
      };
    },
    methods:{

      ...mapActions('auth',{
            signin : SIGNIN_ACTION,
        }),

      onLogin(){
        let validations = new SignInValidation(this.email,this.password);
        this.errors = validations.checkSignInValidation();
        if('email' in this.errors ||'password' in this.errors ){
                return false;
            }else{
              this.signin({email : this.email, password : this.password});
            }
      }
    }
}
</script>
<style scoped>
.error{
    color: red;
}
</style>