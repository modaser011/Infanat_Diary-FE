import React, { useState } from "react";
import "./vaccineDetails.css";
import vaccine from "../../../assets/shutterstock_1866306277.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect,useContext } from "react";
import { Button, Spinner } from "react-bootstrap";
import Updatevacc from "./updatevacc";
import {useNavigate} from "react-router-dom";
import { vacBabyContext } from "../../../data/vacBabydata";
import delete1 from "../../../assets/wdel.png";
const VaccineDetails = () => {
  const data1 = useContext(vacBabyContext);
  const nav=useNavigate()
  const ID=useParams()
  console.log(data1.token)
  const[details,setDetails]=useState({})
  const detailsVac=async()=>{
  await axios.get(`https://infant-diary-backend.onrender.com/api/v1/vaccine/${ID.id}`,{headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    token: `${data1.token}`,
  },
}).then(res=>{
    if(res.status === 200){
        setDetails(res.data.document[0])
      } 
  else {
      alert(res.data.Error);
  }      })
  }

  const deleteVacc=async()=>{
    await axios.delete(`https://infant-diary-backend.onrender.com/api/v1/vaccine/${ID.id}`,{headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      token: `${data1.token}`,
    },
  }).then(res=>{
      if(res.status === 200){
        data1.setChangeVacc(!data1.changeVacc)
nav('/vaccines')        } 
    else {
        alert(res.data.Error);
    }      })
    }

useEffect(() => {
  detailsVac();
}, [data1.changeVacc])

  return (
    <div className="vaccinedetails__container mx-start justify-content-center mx-auto ">
      {(Object.keys(details).length>=1)?<div className="vaccinedetails container bg-white">
        <div className="vaccinedetails__left">
          <img className="vaccinedetails__image" src={vaccine} alt="" />
        </div>
       
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
<div className="mb-3"><Button onClick={deleteVacc} className="btn btn-danger mx-3"><img
                    src={delete1}
                    alt=""
                   className='me-2'
                    style={{ height: "18px", width: "18px", cursor: "pointer",marginTop:'-.2rem' }}
                  /> Remove</Button>

</div><Updatevacc details={details} id={ID.id}/>
</div>
        </div>
      </div>
      : <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
    </div>
    
  );
};

export default VaccineDetails;
