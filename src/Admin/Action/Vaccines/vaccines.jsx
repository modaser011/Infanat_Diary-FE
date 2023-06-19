import React, { useEffect } from "react";
import { Alert, Container, Spinner, Table } from "react-bootstrap";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
import vacc from "../../../assets/shutterstock_1866306277.jpg";
import AddVaccine from "./addVaccine";
import {useNavigate} from "react-router-dom";
const Vaccines = () => {
    const nav=useNavigate()
    const data1 = useContext(vacBabyContext);
    useEffect(() => {
        setTimeout(() => {
          data1.setX(true);
        }, 1000);
        data1.DetailsVac();
      }, [data1.changeVacc]);
  return (
    <Container className="py-2 bg-white" id='contvac'>
      <Container className="mx-auto pt-1" >
        <div className="d-flex justify-content-between">
        <h1 style={{color:'blue'}} className="mt-2">
          All Vaccine
        </h1>
        <AddVaccine/>
        </div>
        <hr className="mb-3" />
        <div style={{ overflow: "scroll" }}>
        <Table 
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
            <tr key={idx} onClick={()=>nav(`/vaccine/${_id}`)} style={{cursor:'pointer'}}> 
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
        {data1.vacc.length === 0 && data1.vaccLoud && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {data1.vacc.length === 0 && !data1.vaccLoud && (
            <Alert variant="warning"> There is no Vacccines</Alert>
          )}
        </div>
      </Container>
    </Container>
  );
};

export default Vaccines;
