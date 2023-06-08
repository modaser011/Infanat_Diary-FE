const AddBabyValidate = (vals) => {

        let errors={}
    
    const letter = /[a-zA-Z0-9]/.test(vals.name);
    if((vals.name.length >0)&&letter)
  {
   errors.name=""
  }
  else 
  {
    errors.name="Username must be in right form and can't be embty";
  }
  return errors;
}
export default AddBabyValidate;
