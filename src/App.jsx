import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./Forms/Login/login";
import { Footer } from "./foothead/footer";
import MyNavbar from "./foothead/Navbar";
import { Forget } from "./Forms/Forget pass/forget";
import Parent from "./parent";
import { ForgetConfirm } from "./Forms/Forget pass/ForgetConfirm";
import SusbendedUsers from "./Admin/Users/SusbendedUsers";
import AllVaccines from "./Admin/Action/Vaccines/allVaccines";
import { RegisterParent } from "./Forms/register/parent/registerParent";
import RegisterDoctor from "./Forms/register/Doctor/registerDoctor";
import { RegisterHos } from "./Forms/register/Hospiatal/registerHos";
import VaccineDetails from "./Admin/Action/Vaccines/VaccineDetails";
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
import Announce from "./Admin/Action/announcements/Announce";
import Announcement from "./parent/Action/Announcements/Announcements";
import Information from "./Admin/Action/information/information";
import Standard from "./Admin/Action/standard/standard";
import AllHospitals from "./Admin/Users/hospitals/AllHospitals";
import AllDoctor from "./Admin/Users/Doctors/AllDoctor";
import AllParent from "./Admin/Users/Parents/AllParent";
import HospitalsDetails from "./parent/Action/Hospitalsdetails/AllHospitals";
import Hospitaldetailed from "./parent/Action/Hospitalsdetails/detailedHospitals";
import UserTypeRegister from "./Forms/userTypeRegister";
import Clinic from "./Doctor/clinic/clinic";
import DoctorClinic from "./Doctor/clinic/doctorClinic";
import HospitalsServicesDetails from "./Hospital/Services/servicesDetails";
import PendDoc from "./Admin/Users/Doctors/PendDocDetail";
import Doctor from "./doctor";
import DoctorPage from "./parent/Action/Doctors/DoctorPage";
import PendHos from "./Admin/Users/hospitals/pendHospital";
import { UpdateParentProfile } from "./Forms/register/parent/updateParentProfile";
import { UpdateDoctorProfile } from "./Forms/register/Doctor/updateDoctorProfile";
import Istruction from "./Admin/Action/instruction/instruction";
import { ForgetConfirmMail } from "./Forms/Forget pass/fogretCOnfirmmail";
import { UpdateHospitalProfile } from "./Forms/register/Hospiatal/updateHospital";
import Chatting from "./parent/Action/chat/chatting";
import Hospiatal from "./hospital";

function App() {
  return (
    <div>
      {
        <BrowserRouter>
          <MyNavbar />
          <Routes>
          <Route path="/hospital" element={<Hospiatal/>}/>

            <Route path="/updateHospital" element={<UpdateHospitalProfile />} />
            <Route path="/confirmforgetPass" element={<ForgetConfirmMail />} />
            <Route path="/instruction" element={<Istruction />} />
            <Route path="/updateDoctor" element={<UpdateDoctorProfile />} />
            <Route path="/updateParent" element={<UpdateParentProfile />} />
            <Route path="/doctorPage/:id" element={<DoctorPage />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/pendingDoctor/:id" element={<PendDoc />} />
            <Route path="/pendingHospital/:id" element={<PendHos />} />
            <Route
              path="/hospitalservicesDetails"
              element={<HospitalsServicesDetails />}
            />
            <Route path="/DoctorClinic" element={<DoctorClinic />} />
            <Route path="/Clinic" element={<Clinic />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/hospital/:id" element={<Hospitaldetailed />} />
            <Route path="/selectRole" element={<UserTypeRegister />} />
            <Route path="/hospitals" element={<HospitalsDetails />} />
            <Route path="/doctorUsers" element={<AllDoctor />} />
            <Route path="/parentUsers" element={<AllParent />} />
            <Route path="/hospitalsUsers" element={<AllHospitals />} />
            <Route path="/announce" element={<Announce />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/information" element={<Information />} />
            <Route path="/standard" element={<Standard />} />
            <Route path="/susbendedusers" element={<SusbendedUsers />} />
            <Route path="/questionAdmin" element={<QuistionAdmin />} />
            <Route path="/vaccines" element={<Vaccines />} />
            <Route path="/forgetConfirm" element={<ForgetConfirm />} />
            <Route path="/post" element={<Post />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/question" element={<Quistion />} />
            <Route path="/RegisterParent" element={<RegisterParent />} />
            <Route path="/RegisterDoctor" element={<RegisterDoctor />} />
            <Route path="/RegisterHospital" element={<RegisterHos />} />
            <Route path="/article" element={<Article />} />
            <Route path="/vaccine/:id" element={<VaccineDetails />} />
            <Route path="/user" element={<UserType />} />
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
            <Route path="/parent" element={<Parent />} />
            <Route path="/chatting" element={<Chatting />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      }
    </div>
  );
}
export default App;
