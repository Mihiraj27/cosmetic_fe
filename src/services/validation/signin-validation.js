import CommonValidations from "./common-validation";

export default class SignInValidation {

    constructor(email,password){
        this.email = email;
        this.password = password;
    }

checkSignInValidation(){
    console.log('this.email  '+this.email);
    let error = [];

      //Password Length Validation
      if(!CommonValidations.isFieldNotEmpty(this.email)){
        error['email'] = 'Email Cannot Be Empty';
    }

    //Email Validation
    if(!CommonValidations.isEmail(this.email)){
        error['email'] = 'Invali Email';
    }

      //Password Length Validation
      if(!CommonValidations.isFieldNotEmpty(this.password)){
        error['password'] = 'Password Cannot Be Empty';
    }

    return error;

}

}