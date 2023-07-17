const SerValidate = (vals) => {
    let errors={}
    const letter = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(vals.name);
    if((vals.name.length >= 4)&&letter)
  {
   errors.name=""
  }
  else 
  {
    errors.name="service name must be in the right form";
  }

  return errors;
}
export default SerValidate;
