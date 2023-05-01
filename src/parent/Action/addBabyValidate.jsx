import React from 'react';

const AddBabyValidate = (vals) => {

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
  return errors;
}
export default AddBabyValidate;
