import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignUp } from "./Forms/register/signUp";
import {Login} from "./Forms/Login/login";
import { Footer } from "./foothead/footer";
import MyNavbar from "./foothead/Navbar";
import {Forget} from "./Forms/Forget pass/forget";
import Info from "./Info";
import { ForgetConfirm } from "./Forms/Forget pass/ForgetConfirm";
import './App.css';
function App(){
  const infox=[{info:'feeding'},{info:'sleeping'},
  {info:'sleeping'},{info:'feeding'},{info:'feeding'},{info:'feeding'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'},{info:'sleeping'},{info:'feeding'}]
  const r=[
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
    ] 

  return (
      <div className="bg-white">
       { <BrowserRouter> 
       <MyNavbar r={r}/>
          <Routes>
          <Route path ="/forget" element={<Forget/>}/>
          <Route path ="/forgetConfirm" element={<ForgetConfirm/>}/>
          <Route path ="/signup" element={<SignUp/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/" element={<Info infox={infox}/>}/>
            </Routes> 
            <Footer/>
       </BrowserRouter> }
       </div>
    );
}
export default App;