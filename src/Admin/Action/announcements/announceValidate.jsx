function ValidateAnnon(vals){
    let errors={}
    
    const letter = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(vals.title);
    
    if((vals.title.length >= 4)&&letter)
  {
   errors.title=""
  }
  else 
  {
    errors.title="title must be greater than 4 char and should be in right form";
  }

  return errors;
}

export default ValidateAnnon;
