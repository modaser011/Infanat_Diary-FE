import React from 'react';
import { Button, Container, Table,Form } from "react-bootstrap";
import delete1 from "../../assets/wdel.png";
import suspend from "../../assets/pause.png";
import d from './Users.module.css'
const SusbendedUsers = () => {
    return (
      <Container className="py-5 " id={d.cont3} >
      <Container className="mx-auto pt-1" >
        <div className='d-flex justify-content-between py-auto'><h1 style={{color:'blue'}}>
          All Users
        </h1>
        <Form.Control
                className="ms-2 my-auto text-center "
                style={{
                  width: "20%",
                  height: "2rem",
                }}
                type="search"
                placeholder="Search for user"
                aria-label="Search"
              />
              </div>
        <hr className="mb-3" />

        <div style={{ overflow: "scroll" }}>
          <div>
        
              
              </div>
        <Table 
          responsive="xs"
          className="me-auto my-auto text-center"
          striped
          style={{}}
        >
          <tbody>
          <tr style={{ backgroundColor:'white' ,color:'black' , borderBottom:'1px solid'}} className='bg-light'>
              <td >
                <h6 className="mx-3"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'0rem'
                  }}
                >
                  Name
                </h6>
              </td>
              <td >
                <h6 className="mx-3"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'0rem'
                  }}
                >
                  Role
                </h6>
              </td>
              <td >
                <h6 className="mx-3"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'0rem'
                  }}
                >
                  Email
                </h6>
              </td>
              <td
                style={{
                  whiteSpace: "nowrap",
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
              <td >
                <div className='d-flex'
                style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                }}>
              <img
                  src="babyy.jpg"
                  alt=""
                  className="ms-4 px-0  rounded-pill img-responsive"
                  style={{ height: "55px", width: "55px" }}
                />
                <h6 className="ms-3"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'1rem'
                  }}
                >
                  Ahmed Mohsen
                </h6></div>
              </td>
              <td >
                <h6 className=""
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'1rem'
                  }}
                >
                  Doctor
                </h6>
              </td>
              <td >
                <h6 className="mx-3"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'1rem'
                  }}
                >
                  modasergomis@gmail.com
                </h6>
              </td>
              <td
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverFlow: "ellipsis",
                  
                }}
              >
                <Button variant="primary" className=" mt-2 mx-3" style={{color:'white'}}>
                <img
                    src={suspend}
                    alt=""
                   className='me-2'
                    style={{ height: "18px", width: "18px", cursor: "pointer",marginTop:'-.2rem' }}
                  />
                  suspend
                </Button>
                <Button variant="danger" className=" mt-2 mx-3">
                <img
                    src={delete1}
                    alt=""
                   className='me-2'
                    style={{ height: "18px", width: "18px", cursor: "pointer",marginTop:'-.2rem' }}
                  />
                  Remove
                </Button>

              </td>
            </tr>
            
          </tbody>
        </Table>
        </div>
      </Container>
    </Container>
    );
}

export default SusbendedUsers;
