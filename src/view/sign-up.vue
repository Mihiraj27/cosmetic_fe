<template>
   <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h1>Sign Up</h1>
                <hr/>
                <form @submit.prevent="onRegister()">
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" v-model="firstName">
                        <div class="error" v-if="errors.firstName">{{ errors.firstName }}</div>
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" v-model="lastName">
                        <div class="error" v-if="errors.lastName">{{ errors.lastName }}</div>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="email">
                        <div class="error" v-if="errors.email">{{ errors.email }}</div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="password">
                        <div class="error" v-if="errors.password">{{ errors.password }}</div>
                    </div>
                    <div class="my-3">
                        <button class="btn btn-primary">Sign Up</button>
                    <div class="my-4">You Already Have An Account? 
                        <router-link class="nav-link" to="/signin">Sign In</router-link>
                    </div>
                  </div>
                </form>
            </div>
        </div>
   </div>
</template>
<script>
import SignUpValidation from '@/services/validation/signup-validation';
import { SIGNUP_ACTION } from '@/store/storeconstant';
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            firstName :'',
            lastName : '',
            email : '',
            password : '',
            errors : [],
        };
    },
    methods :{

        ...mapActions('auth',{
            signup : SIGNUP_ACTION,
        }),

        onRegister(){
            console.log("DD "+this.email)
            let validations =  new SignUpValidation(this.email,this.password,this.firstName,this.lastName);
            this.errors = validations.checkSignUpValidation();
           
            if('email' in this.errors || 'firstName' in this.errors || 'lastName' in this.errors || 'password' in this.errors ){
                return false;
            }else{
                this.signup({email : this.email, password : this.password, firstName : this.firstName,lastName : this.lastName});  
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