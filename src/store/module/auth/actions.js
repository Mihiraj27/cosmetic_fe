import router from "@/router";
import { SIGNUP_ACTION } from "@/store/storeconstant";
import { SIGNIN_ACTION } from "@/store/storeconstant";
import axios from 'axios';

export default{
    async [SIGNUP_ACTION](context,payload){
        await axios.post('http://localhost:5043/signUp',{
            email: payload.email,
            password : payload.password,
            firstName : payload.firstName,
            lastName : payload.lastName       
        }).then(() => router.push('/signin')).catch((err) =>{
            console.log(err)
        })
        

       
    },

    async [SIGNIN_ACTION](text, data){
        var loginError = '';
        await axios.post('http://localhost:5043/signIn',{
            email: data.email,
            password : data.password,
        }).then(() => router.push('/app')).catch((err) =>{
            if (axios.isAxiosError(err)) {
                loginError == err.message;
                
            }
        })

        return loginError;
    }
}