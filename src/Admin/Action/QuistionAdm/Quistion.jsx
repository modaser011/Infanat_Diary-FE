import {Container , Accordion,Col,Row,Form, Alert, Spinner} from 'react-bootstrap';  
import d from "./Quistion.module.css";
import React, { useContext, useEffect,useState } from 'react';
import { vacBabyContext } from '../../../data/vacBabydata';
import AddQuistion from './AddQuistion';
import delete1 from "../../../assets/delete.png";
import EditQuis from './EditQuis';
import axios from 'axios';
const QuistionAdmin = () => {
    const data1 = useContext(vacBabyContext);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    data1.quisSearch(keyword);
  }, [keyword,data1.changeQuis]);

  const deleteQuis = async (id) => {
    console.log(id)
    await axios
      .delete(`https://infant-diary-backend.onrender.com/api/v1/question/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          data1.setChangeQuis(!data1.changeQuis)
        } else {
          alert(res.data.Error);
        }
      });
  };

    return (
        <Container
        fluid
        id={d.cont}
        className="justify-content-center align-content-center"
      >
        <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
            <div className=' d-flex justify-content-between'>
        <h1 style={{ color: "blue" }} className='mt-2' id={d.diva}>All Quistion</h1>
        <div id={d.diva}><AddQuistion/></div>
            </div><hr id={d.diva} />
          <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0">
            <div id={d.search}>
              <h6 className="text-start ms-3 mt-2">search for Quistion</h6>
              <hr />
              <Form.Control
                className="mx-auto mb-2"
                style={{
                  width: "95%",
                  height: "2.7rem",
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          </Col>
          <Col md={true} className="col-md-9 mx-0 mt-3 mt-md-0">
          <div className='d-flex justify-content-between'>
        <h1 style={{ color: "blue" }} className='mt-3' id={d.diva2}>All Quistion</h1>
        <div id={d.diva2}><AddQuistion/></div>
            </div>
            <hr id={d.diva2}/>
            {data1.qius.length >= 1 ? ( 
           data1.qius.map(({body,answer,age,virusName,_id}, idx) =>
           
            <Accordion defaultActiveKey="0" key={_id} className='mb-2'>
      <Accordion.Item eventKey={idx}>
        <Accordion.Header className='me-auto d-flex justify-content-between'> 
        
          <div style={{overflowWrap: "anywhere" }}>
        <p className='text-start'>Age: {age}</p>
        <p className='text-start'>Virus: {virusName}</p>
        <p className='text-start'>Quistion: {body}</p>
        </div>
        <div>
       
                    </div>

        </Accordion.Header>     
        <Accordion.Body>
          <div> <div>
            Answer:
            </div>  
          {answer}</div>
          <div className='d-flex justify-content-end'>
          <EditQuis _id={_id} body={body} answer={answer} age={age} virusName={virusName} />
                <img
                    src={delete1}
                    alt=""
                    onClick={()=>deleteQuis(_id)}
                    style={{ height: "18px", width: "18px", cursor: "pointer" }}
                  />
                </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>)):<></>}  
    {data1.qius.length === 0 && data1.qiusloud && (
            <div className="my-5 mx-auto text-center">
            <Spinner animation="border" className="my-5 mx-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>
          )}
          {data1.qius.length === 0 && !data1.qiusloud && (
            <Alert variant="warning"> There is no hospital </Alert>
          )}         
          </Col>
        </Row>
      </Container>
    );
}

export default QuistionAdmin;
 