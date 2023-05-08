const HosValidate = (vals) => {
    let errors={}
    
    const letter = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(vals.name);
    
    
    
    if((vals.name.length >= 8 && vals.name.length <= 15)&&letter)
  {
   errors.name=""
  }
  else 
  {
    errors.username="Username must be from 8 to 15 char";
  }
    const capsLetterCheck = /[A-Z]/.test(vals.password);
    const numberCheck = /[0-9]/.test(vals.password);
    const pwdLengthCheck = vals.password.length >= 8 && vals.password.length <= 15;
    const specialCharCheck = /[!@#$%^&*]/.test(vals.password);

   if((capsLetterCheck)&&(numberCheck)&&(pwdLengthCheck)&&(specialCharCheck))
   {
    errors.password="";
   }
   else
   {
    errors.password="Password must be from 8 char to 15 and contain capital char,numbers and special char";
   }


if((vals.password)!== (vals.confirmpassword))
  {
    errors.confirmpassword="confirm password doesn't match password"
  }
   else 
  {
    errors.confirmpassword=""
  }
  return errors;
}
export default HosValidate;
