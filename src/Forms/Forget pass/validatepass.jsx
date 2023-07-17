function ValidatePass(vals){
    let errors={}
    const capsLetterCheck = /[A-Z]/.test(vals.newPassword);
    const numberCheck = /[0-9]/.test(vals.newPassword);
    const pwdLengthCheck = vals.newPassword.length >= 8 && vals.newPassword.length <= 15;
    const specialCharCheck = /[!@#$%^&*]/.test(vals.newPassword);

   if((capsLetterCheck)&&(numberCheck)&&(pwdLengthCheck)&&(specialCharCheck))
   {
    errors.newPassword="";
   }
   else
   {
    errors.newPassword="Password must be from 8 char to 15 and contain capital char,numbers and special char";
   }


if((vals.newPassword)!== (vals.confirmpassword))
  {
    errors.confirmpassword="confirm password doesn't match password"
  }
   else 
  {
    errors.confirmpassword=""
  }
  return errors;
}

export default ValidatePass;
