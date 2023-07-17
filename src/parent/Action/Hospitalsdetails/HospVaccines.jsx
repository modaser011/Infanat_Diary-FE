import React, { useEffect, useState } from "react";
import { Alert, Container, Form, Spinner, Table } from "react-bootstrap";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
import vacc2 from "../../../assets/shutterstock_1866306277.jpg";
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";
import d from "../../../Admin/Action/standard/standard.module.css";
const HospVaccines = () => {
    const nav=useNavigate()
    const[keyword,setKeyword]=useState("")
      const tkn = useContext(vacBabyContext);
  const ID = useParams();
  const id1=ID.id
  useEffect(() => {
    tkn.HospitalById(id1);
  }, []);

  return (
    <Container className="pt-2" id={d.cont} style={{backgroundColor:'#F5F7FD'}}>
      <Container className="mx-auto pt-1"  >
        <div className="d-flex justify-content-between">
        <h1 style={{color:'blue'}} className="mt-2">
          All Vaccine for this hospital
        </h1>
        <Form.Control
              className="mt-3 text-center"
              style={{
                width: "50%",
                height: "2.4rem",
                marginLeft:'-1.55rem'
              }}
              type="search"
              placeholder="Search for vaccine"
              aria-label="Search"
              value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
            /> 
        </div>
        <hr className="mb-3" />

        <div style={{ overflow: "scroll" }}>
        {Object.keys(tkn.HospitalsIdDetails).length === 0 && tkn.louding1 && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            
          )}
                  {Object.keys(tkn.HospitalsIdDetails).length >= 1 &&(
              tkn.HospitalsIdDetails.vaccines.length === 0 && !tkn.louding1 && (
            <Alert variant="warning"> There is no Vacccines</Alert>
          ))}

        {Object.keys(tkn.HospitalsIdDetails).length >= 1 &&(
tkn.HospitalsIdDetails.vaccines.length >= 1 ? ( <Table 
          responsive="xs"
          striped
          hover
          className="me-auto my-auto text-center"
        >
          <tbody>
          <tr>
              <td className="mx-auto my-auto">
              </td>
              <td >
                <h6 
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'0rem'
                  }}
                >
                  vaccine name
                </h6>
              </td>
              <td className="mx-auto my-auto">
                <h6 
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'0rem'
                  }}
                >
                  Dose
                </h6>
              </td>
              <td className="mx-auto my-auto">
                <h6
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'0rem'
                  }}
                >
                  Age
                </h6>
              </td>
              <td className="mx-auto my-auto"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverFlow: "ellipsis",
                    marginTop:'0rem',
                    fontWeight:'normal'
                }}

              ><h6 style={{
                  marginTop:'0rem',
                  fontWeight:'normal'
              }}>compulsory</h6>
              </td>
            </tr>
            {Object.keys(tkn.HospitalsIdDetails).length >= 1 &&(
                tkn.HospitalsIdDetails.vaccines.map(({ name, compulsory, dose,age, _id }) => (
            <tr key={_id} onClick={()=>nav(`/vaccine/${_id}`)} style={{cursor:'pointer'}}> 
              <td style={{ width: "9rem" }} className="mx-auto my-auto">
                <div
                  style={{
                    background: "white",
                    height: "6rem",
                    width: "9rem",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={vacc2}
                    style={{ height: "6rem", width: "9rem" }}
                    alt="n"
                
                  />
                </div>
              </td>
              <td className="my-auto text-center"  >
                <h6 className="text-center mx-auto"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
                  {name}
                </h6>
              </td>
              <td >
                <h6 className="text-center mx-auto"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
                  {dose}
                </h6>
              </td>
              <td >
                <h6 className="text-center mx-auto"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
                  {age} months
                </h6>
              </td>
              <td>
                <h6 className="text-center mx-auto"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverFlow: "ellipsis",
                  marginTop:'2rem'
                }}
              >
                {compulsory}
              </h6>
              </td>
            </tr> 
          )))}
           
          </tbody>
        </Table> 
        ) : (
          <></>
        ))}
        </div>
      </Container>
    </Container>
  );
};

export default HospVaccines;
