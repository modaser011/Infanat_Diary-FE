import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./Forms/Login/login";
import { Footer } from "./foothead/footer";
import MyNavbar from "./foothead/Navbar";
import { Forget } from "./Forms/Forget pass/forget";
import Parent from "./parent";
import { ForgetConfirm } from "./Forms/Forget pass/ForgetConfirm";
import Allusers from "./Admin/Users/Allusers";
import SusbendedUsers from "./Admin/Users/SusbendedUsers";
import AllVaccines from "./Admin/Action/Vaccines/allVaccines";
import { RegisterParent } from "./Forms/register/parent/registerParent";
import RegisterDoctor from "./Forms/register/Doctor/registerDoctor";
import { RegisterHos } from "./Forms/register/Hospiatal/registerHos";
import VaccineDetails from "./Admin/Action/Vaccines/VaccineDetails";
import Chatting from "./parent/Action/chat/chatting";
import { VacBabydata } from "./data/vacBabydata";
import "./App.css";
import Article from "./Article";
import AllDoctors from "./parent/Action/Doctors/allDoctors";
import AllBabies from "./parent/Action/Children/allBabies";
import BabyPage from "./parent/Action/Children/BabyPage";
import Post from "./parent/Action/Posts/Post";
import Quistion from "./parent/Action/quistion/Quistion";
import PostDetails from "./parent/Action/Posts/postDetails";
import UserType from "./Forms/userType";
import Admin from "./Admin";
//this component for admin  only
import QuistionAdmin from "./Admin/Action/QuistionAdm/Quistion";
import Vaccines from "./Admin/Action/Vaccines/vaccines";
function App() {
  const r = [
    { png: "home.png", id: "home", link: "/" },
    { png: "baby.png", id: "My Babies", link: "/myBabies" },
    { png: "bar-chart.png", id: "Charts", link: "/" },
    { png: "construction.png", id: "Tools", link: "/" },
    { png: "instructions.png", id: "Instructions", link: "/" },
    { png: "conversation.png", id: "FAQ", link: "/" },
    { png: "community.png", id: "Community", link: "/" },
    { png: "settings.png", id: "Settings", link: "/" },
    { png: "theme.png", id: "Theme", link: "/" },
    { png: "logout.png", id: "Logout", link: "/" },
  ];
  return (
    <div>
      {
        <BrowserRouter>
          <MyNavbar r={r} />
          <Routes>
            <Route path="/forget" element={<Forget />} />
            <Route
              path="/allusers"
              element={
                <Allusers
                />
              }
            />
            <Route
              path="/susbendedusers"
              element={
                <SusbendedUsers
                 
                />
              }
            />
            <Route path="/quistionAdmin" element={<QuistionAdmin />} />
            <Route path="/vaccines" element={<Vaccines />} />
            <Route path="/forgetConfirm" element={<ForgetConfirm />} />
            <Route path="/post" element={<Post />} />
            <Route path="/admin" element={<Admin />} />
            
            <Route path="/quistion" element={<Quistion />} />

            <Route path="/RegisterParent" element={<RegisterParent />} />
            <Route path="/RegisterDoctor" element={<RegisterDoctor />} />
            <Route path="/RegisterHos" element={<RegisterHos />} />
            <Route path="/chatting" element={<Chatting />} />
            <Route path="/article" element={<Article />} />
            <Route path="/vaccine/:id" element={<VaccineDetails />} />
            <Route path="/user" element={<UserType/>} />

            <Route
              path="/allVaccines"
              element={
                <VacBabydata>
                  <AllVaccines />
                </VacBabydata>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/allDoctors" element={<AllDoctors />} />
            <Route path="/allBabies" element={<AllBabies />} />
            BabyPage
            <Route path="/babyPage/:id" element={<BabyPage />} />
            <Route path="/post/:id" element={<PostDetails />} />

            <Route path="/parent" element={<Parent/>} />
            
          </Routes>
          <Footer />
        </BrowserRouter>
      }
    </div>
  );
}
export default App;
