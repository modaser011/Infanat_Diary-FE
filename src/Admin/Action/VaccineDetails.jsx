import React, { useState } from "react";
import "./vaccineDetails.css";
import vaccine from "../../assets/shutterstock_1866306277.jpg";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Updatevacc from "./updatevacc";
import {useNavigate} from "react-router-dom";
const VaccineDetails = () => {
  const nav=useNavigate()
  const ID=useParams()
  console.log(ID.id)
  const[details,setDetails]=useState({})
  const detailsVac=async()=>{
  await axios.get(`https://infant-diary-backend.onrender.com/api/v1/vaccine/${ID.id}`).then(res=>{
    if(res.status === 200){
        setDetails(res.data.document[0])
      } 
  else {
      alert(res.data.Error);
  }      })
  }

  const deleteVacc=async()=>{
    await axios.delete(`https://infant-diary-backend.onrender.com/api/v1/vaccine/${ID.id}`).then(res=>{
      if(res.status === 200){
nav('/allVaccines')        } 
    else {
        alert(res.data.Error);
    }      })
    }

useEffect(() => {
  detailsVac();
}, [])
//console.log(details)
  return (
    
    <div className="vaccinedetails__container mx-start justify-content-center mx-auto ">
      {(Object.keys(details).length>=1)?<div className="vaccinedetails container bg-white">
        {/* Left */}
        <div className="vaccinedetails__left">
          <img className="vaccinedetails__image" src={vaccine} alt="" />
        </div>
        {/* Right */}
        <div className="vaccinedetails__right d-block">
          <h1 className="vaccinedetails__header">{details.name}</h1>
          <div>
            <div className="vaccinedetails__ageDoseComp">
              <p className="vaccinedetails__infoInside">
                <span>Age:</span> {details.age}
              </p>
              <p className="vaccinedetails__infoInside">
                <span>Dose:</span> {details.dose}
              </p>
              <p className="vaccinedetails__infoInside">
                <span>Compalsory:</span> {details.compulsory}
              </p>
            </div>
            <p className="vaccinedetails__info">
              <span>Reasons:</span> {details.reason}
            </p>
            <p className="vaccinedetails__info">
              <span>Side effects:</span> {details.sideEffects}
            </p>
          </div>
          <br/>
          <div className="d-flex">
<Updatevacc details={details} ID={ID} />        
<div className="mb-3"><Button onClick={deleteVacc} className="btn btn-danger mx-3"> delete </Button></div>
</div>
        </div>
      </div>
      :<>loading...</>}
    </div>
    
  );
};

export default VaccineDetails;
