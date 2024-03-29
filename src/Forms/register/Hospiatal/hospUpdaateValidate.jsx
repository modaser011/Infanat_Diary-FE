function HospUpdatetValidate(vals){
    let errors={}
    
    const letter =/^[A-Za-z].*$/.test(vals.name);
    
    if((vals.name.length >= 3)&&letter)
  {
   errors.name=""
  }
  else 
  {
    errors.name="Username must be greater than 3 char and must be in the right form";
  }


  const letter2 = /^[A-Za-z].*$/.test(vals.address);
    
    
    
  if((vals.address.length >= 3)&&letter2)
{
 errors.address=""
}
else 
{
  errors.address="address the right form";
}


    const capsLetterCheck = /[A-Z]/.test(vals.password);
    const numberCheck = /[0-9]/.test(vals.password);
    const pwdLengthCheck = vals.password.length >= 8 && vals.password.length <= 15;
    const specialCharCheck = /[!@#$%^&*]/.test(vals.password);

   if((capsLetterCheck)&&(numberCheck)&&(pwdLengthCheck)&&(specialCharCheck)||vals.password==="")
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

export default HospUpdatetValidate;
