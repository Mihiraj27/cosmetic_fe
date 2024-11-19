export default class CommonValidations {
    static isEmail (email){
        console.lo
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    static minLenghth(name , minLength){
        console.log(name.length)
        if(name.length < minLength){
            return false;
        }
        return true;
    }

    static isFieldNotEmpty(field){
        if(field.trim().length === 0){
            return false;
        }
        return true;
    }
}