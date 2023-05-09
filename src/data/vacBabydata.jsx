import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const vacBabyContext=createContext();
const VacBabydata = ({children}) => {
    const [babies]=useState([
        {name:"ahmed",birthData:'10/10/2020',gender:'male',weight:"750",headDiameter:'5',height:'40'},
        {name:"mena",birthData:'10/10/2020',gender:'female',weight:"750",headDiameter:'5',height:'40'},     
         {name:"mena",birthData:'10/10/2020',gender:'female',weight:"750",headDiameter:'5',height:'40'}
  ,      {name:"mena",birthData:'10/10/2020',gender:'female',weight:"750",headDiameter:'5',height:'40'}
  ,      {name:"mena",birthData:'10/10/2020',gender:'female',weight:"750",headDiameter:'5',height:'40'}
  ,      {name:"mena",birthData:'10/10/2020',gender:'female',weight:"750",headDiameter:'5',height:'40'}
        ]);
        const [search,setsearch]=useState("");
const searcher=()=>
{
return babies.filter((el,e)=>el.name.includes(search))
}
const setsearcher=(e)=>
{
setsearch(e.target.value)
}

    return (
        
        <vacBabyContext.Provider value={{babies,setsearcher,searcher,search}} >
            {children}
        </vacBabyContext.Provider>
    );
}

export {VacBabydata,vacBabyContext};
