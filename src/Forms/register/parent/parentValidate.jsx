function ParentValidate(vals){
    let errors={}
    
    const letter = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(vals.name);
    
    
    
    if((vals.name.length >= 8 && vals.name.length <= 15)&&letter)
  {
   errors.name=""
  }
  else 
  {
    errors.name="Username must be from 8 to 15 char";
  }
    const capsLetterCheck = /[A-Z]/.test(vals.Password);
    const numberCheck = /[0-9]/.test(vals.Password);
    const pwdLengthCheck = vals.Password.length >= 8 && vals.Password.length <= 15;
    const specialCharCheck = /[!@#$%^&*]/.test(vals.Password);

   if((capsLetterCheck)&&(numberCheck)&&(pwdLengthCheck)&&(specialCharCheck))
   {
    errors.Password="";
   }
   else
   {
    errors.Password="Password must be from 8 char to 15 and contain capital char,numbers and special char";
   }


if((vals.Password)!== (vals.confirmPassword))
  {
    errors.confirmPassword="confirm password doesn't match password"
  }
   else 
  {
    errors.confirmPassword=""
  }
  return errors;
}

export default ParentValidate;