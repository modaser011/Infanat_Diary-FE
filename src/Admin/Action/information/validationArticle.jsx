function Validateart(vals,file){
    let errors={}
    
    const letter = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(vals.topic);
    
    if((vals.topic.length >= 5)&&letter)
  {
   errors.topic=""
  }
  else 
  {
    errors.topic="Username must be from 8 to 15 char";
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

   const urlPattern2 = /^(ftp|http|https):\/\/[^ "]+$/.test(vals.videoLink);
   if(urlPattern2)
   {
    errors.videoLink=""
   }
   else
   {
    errors.videoLink="please enter valid link"
   }

  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (file && allowedTypes.includes(file.type)) {
    errors.image="";
  } else {
    errors.image="Please select a valid image file (JPEG, PNG)"
  }

  return errors;
}

export default Validateart;
