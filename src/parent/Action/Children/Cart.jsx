import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
import vacc from "../../../assets/shutterstock_1866306277.jpg";

import axios from "axios";
const Cart = () => {
  const ID = useParams();
  const tkn = useContext(vacBabyContext);
const[vaccines,setVaccines]=useState([]);
const detailsVac = async () => {
  await axios
    .get(
      `https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${tkn.token}`,
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        setVaccines(res.data.document.vaccines);
      } else {
        alert(res.data.Error);
      }
    });
};
useEffect(() => {
  detailsVac();
}, [tkn.change]);
console.log(vaccines)
  return (
    <Container className="py-2 bg-white" id='contvac'>
      <Container className="mx-auto pt-1" >
        <h1 style={{color:'blue'}}>
          All Vaccine for baby
        </h1>
        <hr className="mb-3" />
        <div style={{ overflow: "scroll" }}>
        <Table 
          responsive="xs"
          striped
          bordered
          hover
          className="me-auto my-auto text-center"
        >
          <tbody>
          <tr>
              <td style={{ width: "9rem" }} className="mx-auto my-auto">
              </td>
              <td >
                <h6 className="mx-3"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'0rem'
                  }}
                >
                  vaccine name
                </h6>
              </td>
              <td >
                <h6 className="mx-3"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'0rem'
                  }}
                >
                  Dose
                </h6>
              </td>
              <td >
                <h6 className="mx-3"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'0rem'
                  }}
                >
                  Age
                </h6>
              </td>
              <td
                style={{
                  whiteSpace: "nowrap",
                  width: "5rem",
                  overflow: "hidden",
                  textOverFlow: "ellipsis",
                    marginTop:'0rem',
                    fontWeight:'normal'
                }}

              ><h6 style={{
                  marginTop:'0rem',
                  fontWeight:'normal'
              }}>mark as taken vaccine</h6>
              </td>
              <td
                style={{
                  whiteSpace: "nowrap",
                  width: "10rem",
                  overflow: "hidden",
                  textOverFlow: "ellipsis",
                }}
              >
              <h6 style={{
                  marginTop:'0rem',
                  fontWeight:'normal'
              }}>Acctions</h6>
              </td>
            </tr>
            <tr>
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
              <td >
                <h6 className="mx-3"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
                  Malaria vaccine
                </h6>
              </td>
              <td >
                <h6 className="mx-3"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
                  5 dose
                </h6>
              </td>
              <td >
                <h6 className="mx-3"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
                  3 months
                </h6>
              </td>
              <td
                style={{
                  whiteSpace: "nowrap",
                  width: "5rem",
                  overflow: "hidden",
                  textOverFlow: "ellipsis",
                }}
              >
                <Form.Check inline label="mark as taken vaccine" className="mx-3" name="group1" type="checkbox" style={{
                  marginTop:'2rem',
                  fontWeight:'normal'
                }}  />
              </td>
              <td
                style={{
                  whiteSpace: "nowrap",
                  width: "10rem",
                  overflow: "hidden",
                  textOverFlow: "ellipsis",
                }}
              >
                <Button variant="danger" className=" mt-4 mx-3">
                  Remove vaccine
                </Button>
              </td>
            </tr>
           
          </tbody>
        </Table>
        </div>
      </Container>
    </Container>
  );
};

export default Cart;
