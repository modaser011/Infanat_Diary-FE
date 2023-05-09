import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login} from "./Forms/Login/login";
import { Footer } from "./foothead/footer";
import { useState } from "react";
import MyNavbar from "./foothead/Navbar";
import {Forget} from "./Forms/Forget pass/forget";
import Info from "./Info";
import { ForgetConfirm } from "./Forms/Forget pass/ForgetConfirm";
import Allusers from "./Admin/Users/Allusers";
import SusbendedUsers from "./Admin/Users/SusbendedUsers";
import Mybabies from "./parent/Action/Mybabies";
import AllVaccines from "./Admin/Action/allVaccines";
import { RegisterParent } from "./Forms/register/parent/registerParent";
import RegisterDoctor from "./Forms/register/Doctor/registerDoctor";
import { RegisterHos } from "./Forms/register/Hospiatal/registerHos";
import { Babydata } from "./data/vacBabydata";
import './App.css';
function App(){
  //get all movies by axios 
  const infox=[{info:'feeding'},{info:'sleeping'},
  {info:'sleeping'},{info:'feeding'},{info:'feeding'},{info:'feeding'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'}]
  const r=[
    {png:"home.png",id:'home',link:'/'}, 
    {png:"baby.png",id:'My Babies',link:'/myBabies'}, 
    {png:"bar-chart.png",id:'Charts',link:'/'},
    {png:"construction.png",id:'Tools',link:'/'}, 
    {png:"instructions.png",id:'Instructions',link:'/'},
    {png:"conversation.png",id:'FAQ',link:'/'}, 
    {png:"community.png",id:'Community',link:'/'},
    {png:"settings.png",id:'Settings',link:'/'},
    {png:"theme.png",id:'Theme',link:'/'},
    {png:"logout.png",id:'Logout',link:'/'}
    ] 
    
const [datar]=useState([
    {png:"home.png",id:'home',link:'/'}, 
    {png:"baby.png",id:'My Babies',link:'/'}, 
    {png:"bar-chart.png",id:'Charts',link:'/'},
    {png:"construction.png",id:'Tools',link:'/'}, 
    {png:"instructions.png",id:'Instructions',link:'/'},
    {png:"conversation.png",id:'FAQ',link:'/'}, 
    {png:"community.png",id:'Community',link:'/'},
    {png:"settings.png",id:'Settings',link:'/'},
    {png:"theme.png",id:'Theme',link:'/'},
    {png:"logout.png",id:'Logout',link:'/'}
    ] );


    const [vaccine]=useState([
      {name:"vac 1",compulsory:'elective',dose:'1',age:'1 month',sideEffects:'there is no',reason:'it is good'}, 
      {name:"vac 1",compulsory:'elective',dose:'1',age:'2 month',sideEffects:'there is no',reason:'it is good'}, 
      {name:"vac 1",compulsory:'elective',dose:'1',age:'3 month',sideEffects:'there is no',reason:'it is good'}, 
      {name:"vac 1",compulsory:'elective',dose:'1',age:'4 month',sideEffects:'there is no',reason:'it is good'}, 
      {name:"vac 1",compulsory:'elective',dose:'1',age:'5 month',sideEffects:'there is no',reason:'it is good'}, 
      {name:"vac 1",compulsory:'elective',dose:'1',age:'6 month',sideEffects:'there is no',reason:'it is good'}, 
      {name:"vac 1",compulsory:'elective',dose:'1',age:'7 month',sideEffects:'there is no',reason:'it is good'}, 
      {name:"vac 1",compulsory:'elective',dose:'1',age:'8 month',sideEffects:'there is no',reason:'it is good'}, 
      ] );
  
      const temp=[]
      temp.push({age:"all"})
      vaccine.map(({age})=>(temp.push({age})))
      const temp2= [...new Set(temp.map(item => item.age))]
      const temp3=[...temp2]
      const [vacc,setvacc]=useState(vaccine);
       const filter=(d)=>
       {
        if(d!=="all")
        {
        const f=vaccine.filter(({age})=>age===d)
        setvacc(f)
       }
       else
       setvacc(vaccine)
      }

const [search,setsearch]=useState("");
const setsearcher=(e)=>
{
setsearch(e.target.value)
}

const searcher=()=>
{
return datar.filter((el,e)=>el.id.includes(search))
}
  return (
      <div>
       { <BrowserRouter> 
       <MyNavbar r={r}/>
          <Routes>
          <Route path ="/forget" element={<Forget/>}/>
          <Route path ="/allusers" element={<Allusers searcher={searcher()} search={search} setsearcher={setsearcher}/>}/>
          <Route path ="/susbendedusers" element={<SusbendedUsers searcher={searcher()} search={search} setsearcher={setsearcher}/>}/>
          <Route path ="/forgetConfirm" element={<ForgetConfirm/>}/>
          <Route path ="/RegisterParent" element={<RegisterParent/>}/>
          <Route path ="/RegisterDoctor" element={<RegisterDoctor/>}/>
          <Route path ="/RegisterHos" element={<RegisterHos/>}/>

         {/* <Route path ="/myBabies" element={<Babydata><Mybabies/></Babydata> }/> */}
          <Route path ="/allVaccines" element={<AllVaccines vacc={vacc} filter={filter} temp3={temp3}/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/" element={<Info infox={infox}/>}/>
            </Routes> 
            <Footer/>
       </BrowserRouter> } 
      
       </div>
    );
}
export default App;