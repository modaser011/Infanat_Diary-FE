import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Container, Form, Spinner, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
import vacc from "../../../assets/shutterstock_1866306277.jpg";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const Cart = () => {
  const nav=useNavigate()
  const[loud,setLoud]=useState(false)
  const ID = useParams();
  const tkn = useContext(vacBabyContext);
const[vaccines,setVaccines]=useState([]);
const[takenVaccines,setTakenVaccines]=useState([]);

const [vals, setVals] = useState({
  vacc12: "upcoming",
});
const handleInput = (e) => {
  setVals((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
const detailsVac = async () => {
  setLoud(true)
  await axios
    .get(
      `https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token:`${localStorage.getItem('token')}`
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        setVaccines(res.data.document.vaccines);
        setTakenVaccines(res.data.document.takenVaccines)
        setLoud(false)

      } else {
        alert(res.data.Error);
      }
    });
};
useEffect(() => {
  detailsVac();
}, [tkn.change]);

const markvac = async (id1) => {
  setLoud(true)
  await axios
    .put(
      `https://infant-diary-backend.onrender.com/api/v1/child/${ID.id}/${id1}`,{},
      {
        headers: {     
          token:`${localStorage.getItem('token')}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
tkn.setChange(!tkn.change)
      } else {
        alert(res.data.Error);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
  return (
    <Container className="py-2 bg-white" id='contvac'>
      {vals.vacc12==='upcoming'&&(
      <Container className="mx-auto pt-1" >
        <div className="d-flex justify-content-between">
        <h1 style={{color:'blue'}}>
          All upcoming Vaccines for baby
        </h1>
        
        <Form.Select
                aria-label="Default select example"
                value={vals.vacc12}
                name="vacc12"
                onChange={handleInput}
                required
                style={{width:'fit-content',height:'2.5rem',marginTop:'1rem'}}
              >
                <option value="upcoming">Upcoming vaccines</option>
                <option value="taken">Taken vaccines</option>
              </Form.Select>
        </div>
        <hr className="mb-3" />
        <div style={{ overflow: "scroll" }}>
           {vaccines.length === 0 && !loud &&(
          <p className="align-self-center">
             <Alert variant='warning'>There is no upcoming vaccines</Alert>  
          </p>
        )}
        {vaccines.length === 0 && loud && (
          <div className="d-flex justify-content-center">
 <Spinner  animation="border" role="status">
 <span className="visually-hidden">Loading...</span>
</Spinner> </div>      )}
{vaccines.length >= 1 ? ( <Table 
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
              <td className="text-center">
                <h6  className="text-center mx-auto"  
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
              <td className="text-center">
                <h6  className="text-center mx-auto"  
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
              <td className="text-center">
                <h6  className="text-center mx-auto"  
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'0rem'
                  }}
                >
                  compulsory
                </h6>
              </td>
              <td className="text-center">
                <h6 className="text-center mx-auto"  
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

              ><h6  className="text-center mx-auto"  style={{
                  marginTop:'0rem',
                  fontWeight:'normal'
              }}>mark as taken vaccine</h6>
              </td>
            </tr>
            {vaccines.length >= 1 ? (
            vaccines.map(({ name ,age,_id,dose,compulsory}) => (
            <tr key={_id}>
              <td style={{ width: "9rem" ,cursor:'pointer'}} className="mx-auto my-auto" onClick={()=>nav(`/vaccine/${_id}`)}>
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
              <td className="text-center" style={{cursor:'pointer'}} onClick={()=>nav(`/vaccine/${_id}`)}>
                <h6 className="text-center mx-auto"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
                  {name}
                </h6>
              </td>
              <td style={{cursor:'pointer'}} onClick={()=>nav(`/vaccine/${_id}`)}>
                <h6 className="text-center mx-auto"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
               {dose} {dose>1?'doses':'dose'}
              </h6>
              </td>
              <td style={{cursor:'pointer'}} onClick={()=>nav(`/vaccine/${_id}`)}>
                <h6 className="text-center mx-auto"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
                 {compulsory}
                </h6>
              </td>
              <td style={{cursor:'pointer'}} onClick={()=>nav(`/vaccine/${_id}`)}>
                <h6 className="text-center mx-auto"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
                  {age} months
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
                <Button variant="primary" onClick={()=>markvac(_id)} className=" mt-4 mx-3">
                  Taken vaccine
                </Button>
              </td>
             
            </tr>  )))
            : (
            <></>
          )}
          </tbody>
        </Table> ) : (
            <></>
          )}
        </div>
      </Container>
      )}

{vals.vacc12==='taken'&&(
      <Container className="mx-auto pt-1" >
        <div className="d-flex justify-content-between">
        <h1 style={{color:'blue'}}>
          All taken Vaccines for baby
        </h1>
        
        <Form.Select
                aria-label="Default select example"
                value={vals.vacc12}
                name="vacc12"
                onChange={handleInput}
                required
                style={{width:'fit-content',height:'2.5rem',marginTop:'1rem'}}
              >
                <option value="upcoming">Upcoming vaccines</option>
                <option value="taken">Taken vaccines</option>
              </Form.Select>
        </div>
        <hr className="mb-3" />
        <div style={{ overflow: "scroll" }}>
           {takenVaccines.length === 0 && !loud &&(
          <p className="align-self-center">
             <Alert variant='warning'>There is no taken vaccines till now</Alert>  
          </p>
        )}
        {takenVaccines.length === 0 && loud && (
          <div className="d-flex justify-content-center">
 <Spinner  animation="border" role="status">
 <span className="visually-hidden">Loading...</span>
</Spinner> </div>      )}
{takenVaccines.length >= 1 ? ( <Table 
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
              <td className="text-center">
                <h6  className="text-center mx-auto"  
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
              <td className="text-center">
                <h6  className="text-center mx-auto"  
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
              <td className="text-center">
                <h6  className="text-center mx-auto"  
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'0rem'
                  }}
                >
                  compulsory
                </h6>
              </td>
              <td className="text-center">
                <h6 className="text-center mx-auto"  
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
            
             
            </tr>
            {takenVaccines.length >= 1 ? (
            takenVaccines.map(({ name ,age,_id,dose,compulsory}) => (
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
              <td className="text-center">
                <h6 className="text-center mx-auto"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
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
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
               {dose} {dose>1?'doses':'dose'}
              </h6>
              </td>
              <td>
                <h6 className="text-center mx-auto"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
                 {compulsory}
                </h6>
              </td>
              <td>
                <h6 className="text-center mx-auto"
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    overflow: "hidden",
                    textOverFlow: "ellipsis",
                    marginTop:'2rem'
                  }}
                >
                  {age} months
                </h6>
              </td>
              
             
            </tr>  )))
            : (
            <></>
          )}
          </tbody>
        </Table> ) : (
            <></>
          )}
        </div>
      </Container>
      )}

    </Container>
  );
};

export default Cart;
