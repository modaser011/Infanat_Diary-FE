import React from "react";
import { Button, Container, Form, Row, Table } from "react-bootstrap";
import d from "./allDoc.module.css";
const Cart = () => {
  return (
    <Container className="py-2 bg-white" id={d.cont}>
      <Container className="mx-auto mt-1" style={{ overflow: "scroll" }}>
        <h1 style={{color:'blue'}}>
          All Vaccine for baby
        </h1>
        <hr className="mb-3"/>
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
                    src="shutterstock_1866306277.jpg"
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
                    src="shutterstock_1866306277.jpg"
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
            </tr> <tr>
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
                    src="shutterstock_1866306277.jpg"
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
      </Container>
    </Container>
  );
};

export default Cart;
