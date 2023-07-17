import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Spinner, Table } from "react-bootstrap";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
import vacc from "../../../assets/shutterstock_1866306277.jpg";
import AddVaccine from "./addVaccine";
import {useNavigate} from "react-router-dom";
import d from "./vaccine.module.css";
const Vaccines = () => {
    const nav=useNavigate()
    const data1 = useContext(vacBabyContext);
    const[keyword,setKeyword]=useState("")
    useEffect(() => {
        setTimeout(() => {
          data1.setX(true);
        }, 1000);
        data1.searchVac(keyword);
      }, [data1.changeVacc,keyword]);
  return (
    <Container className="py-2" id={d.cont} style={{backgroundColor:'#F5F7FD'}}>
      <Container className="mx-auto pt-1" >
        <div className="d-flex row justify-content-between">
       <Col> <h1 style={{color:'#006AD4'}} className="mt-2">
          All Vaccine
        </h1></Col>
        <Col className="col-6"> <Form.Control
              className="mt-3 text-center"
              style={{
                height: "2.4rem",
              }}
              type="search"
              placeholder="Search for vaccine"
              aria-label="Search"
              value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
            /> </Col>
        <Col md={true}> <AddVaccine/></Col>
        </div>
        <hr className="mb-3" />

        <div style={{ overflow: "scroll" }}>
        {data1.vacc.length === 0 && data1.vaccLoud && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
              {data1.vacc.length === 0 && !data1.vaccLoud && (
            <Alert variant="warning"> There is no Vacccines</Alert>
          )}

{data1.vacc.length >= 1 ? ( <Table 
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
            {data1.vacc.length >= 1 ? (
            data1.vacc.map(({ name, compulsory, dose,age, _id }, idx) => (
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
                    src={vacc}
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
            </tr> ))
          ) : (
            <></>
          )}
           
          </tbody>
        </Table> 
        ) : (
          <></>
        )}
        </div>
      </Container>
    </Container>
  );
};

export default Vaccines;
