import React from 'react';
import { Button,Row,Col, Container, Table,Form, Spinner, Alert } from "react-bootstrap";
import delete1 from "../../../assets/wdel.png";
import suspend from "../../../assets/pause.png";
import d from '../Users.module.css'
import { vacBabyContext } from '../../../data/vacBabydata';
import { useContext } from 'react';
import { useEffect } from 'react';
import parent from '../../../assets/parent.png'
import axios from 'axios';
const ParentSuspend = () => {
    const data1 = useContext(vacBabyContext);
    useEffect(() => {
        data1.parentBlk1();
      }, [data1.parentChangeBlk]);

      if(data1.parentBlk===undefined)
      {
        data1.setParentBlk([])
      }
  const unsuspendparent = async (id1) => {
    await axios
      .put(
        `https://infant-diary-backend.onrender.com/api/v1/admin/blockparent/${id1}`,
        {},
        {
          headers: {
            token: `${localStorage.getItem('token')}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          data1.setParentChangeBlk(!data1.parentChangeBlk);
          alert(res.data.message)
        } else {
          alert(res.data.Error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

    return (
      <div className="py-3 min-vw-100 container bg-white" id={d.cont}  style={{backgroundColor:'#F5F7FD'}}>
      <Container >
        <Row className='Col-sm-6 col-12 d-flex justify-content-between py-auto'style={{color:'blue',overflow:'scroll'}}>
          <Col md={true}>
          <h1 >
        All Suspended parents
        </h1>
        </Col>
        <Col className='col-md-3 mt-3'>
        <Form.Control
                className="ms-2 my-auto text-center "
                style={{
                  height: "2rem",
                }}
                type="search"
                placeholder="Search for user"
                aria-label="Search"
              />
              </Col>
              </Row>
        <hr className="mb-3" />

        <div style={{ overflow: "scroll" }}>
          <div>
        
              
              </div>
              {data1.parentBlk.length === 0 && !data1.loudParentBlk &&(
          <p className="align-self-center">
             <Alert variant='warning'>There is no suspended parents users</Alert>  
          </p>
        )}
              {data1.parentBlk.length === 0 && data1.loudParentBlk && (
          <div className="d-flex justify-content-center">
 <Spinner  animation="border" role="status">
 <span className="visually-hidden">Loading...</span>
</Spinner> </div>)}
{data1.parentBlk.length >= 1 ? (<Table 
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
     {data1.parentBlk.length >= 1 ? (
                data1.parentBlk.map(({ email, role, name, _id }) => (
            <tr>
              <td >
                <div className='d-flex'
                style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                }}>
              <img
                  src={parent}
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
                  {name}
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
                  {role}
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
                 {email}
                </h6>
              </td>
              <td
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverFlow: "ellipsis",
                  
                }}
              >
                <Button variant="primary" className=" mt-2 mx-3" style={{color:'white'}} onClick={()=>unsuspendparent(_id)}
>
                <img
                    src={suspend}
                    alt=""
                   className='me-2'
                    style={{ height: "18px", width: "18px", cursor: "pointer",marginTop:'-.2rem' }}
                  />
                  unsuspend
                </Button>
                <Button variant="danger" className=" mt-2 mx-3" onClick={()=>data1.deletion('parent',_id)}>
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
            ))):<></>} 
          </tbody>
        </Table>) : (
          <></>
        )}
        </div>
      </Container>
    </div>
    );
}
export default ParentSuspend;
