function ValidateClinic(vals){
    let errors={}
    
    const letter = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(vals.name);
    
    if((vals.name.length >= 4)&&letter)
  {
   errors.name=""
  }
  else 
  {
    errors.title="Title must be greater than 4 char and must be in right form";
  }


  const letter2 = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(vals.address);
    
  if((vals.address.length >= 5)&&letter2)
{
 errors.address=""
}
else 
{
  errors.address="Username must be greater than 6 char and should be in right form";
}

const letter3 = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(vals.city);
    
if((vals.city.length >= 5)&&letter3)
{
errors.city=""
}
else 
{
errors.city="Username must be greater than 6 char and should be in right form";
}


const letter4 = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(vals.state);
    
if((vals.state.length >= 5)&&letter4)
{
errors.state=""
}
else 
{
errors.state="Username must be greater than 6 char and should be in right form";
}


const letter5 = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(vals.zip);
    
if((vals.zip.length >= 5)&&letter5)
{
errors.zip=""
}
else 
{
errors.zip="Username must be greater than 6 char and should be in right form";
}

const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/.test(vals.link);
if(urlPattern)
{
 errors.link=""
}
else
{
 errors.link="please enter valid link"
}

return errors;
}

export default ValidateClinic;
