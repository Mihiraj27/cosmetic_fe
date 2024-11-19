import CommonValidations from "./common-validation";

export default class SignUpValidation {

    constructor( email , password,firstName ,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }



    checkSignUpValidation(){
        let error = [];
        console.log('Hi  '+this.email)
        //Email Validation
        if(!CommonValidations.isEmail(this.email)){
            error['email'] = 'Invali Email';
        }
        //Password Length Validation
        if(!CommonValidations.minLenghth(this.password,6)){
            error['password'] = 'Invali Minumul Password Length';
        }

         //Password Length Validation
         if(!CommonValidations.isFieldNotEmpty(this.firstName)){
            error['firstName'] = 'Invali First Name';
        }

          //Password Length Validation
          if(!CommonValidations.isFieldNotEmpty(this.lastName)){
            error['lastName'] = 'Invalid Last Name';
        }
     

        return error;
    }

}