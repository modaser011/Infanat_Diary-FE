import React, { useContext, useEffect,useState } from "react";
import d from "./announce.module.css";
import { Alert, Col, Form, Row, Spinner } from "react-bootstrap";
import { vacBabyContext } from "../../../data/vacBabydata";
import search from '../../../assets/search.svg'
import ann2 from '../../../assets/ann2.png'

const Announcement = () => {
  const data1 = useContext(vacBabyContext);
  useEffect(() => {
    setTimeout(() => {
      data1.setX1(true);
    }, 1000);
    data1.announcements();
  }, [data1.changeannonce]);
  const[keyword,setKeyword]=useState("");
  return (
    <div id={d.cont} className="justify-content-center align-content-center">
      <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "blue" }}>All Annuncements</h1>
        </div>
        <hr />
        <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0 ">
          <div id={d.search} className="bg-white">
            <h6 className="text-start ms-3 mt-2">search for annuncements</h6>
            <hr />
            <Form className="d-flex" onSubmit={(e)=>data1.searchPost(e,keyword)}>
            <Form.Control
              className="mx-1 mb-2"
              style={{
                width: "95%",
                height: "2.7rem",
              }}
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=>setKeyword(e.target.value)}
            />
             <Form.Group>
            <button type="submit" className="bg-white me-1" style={{border:'none'}}><img className='img-responsive'src={search}  style={{ height: "20px", width: "20px",marginTop:'0.5rem' }}
            alt="" /></button>
            </Form.Group>
          </Form>
          </div>
        </Col>

        <Col md={true} className="col-md-9 mx-0 mt-3 mt-md-0">
          {data1.annonce.length >= 1 ? (
            data1.annonce.map(({ body, _id }, idx) => (
              <div
                className="post__container container bg-white mb-3"
                key={_id}
              > 
                <div className="post__right">
                 
                  <div
                    className="post__body d-flex"
                    style={{ overflowWrap: "anywhere" }}
                  >
                    <div className="me-4"><img src={ann2} className="img-responsive" alt="" style={{height:'60px',width:'60px'}} /></div>
                    <div className="mt-3"><span>{body}</span></div>
                  </div>
                </div>
                
              </div>
            ))
          ) : (
            <></>
          )}
          {data1.annonce.length === 0 && data1.annonceloud && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {data1.annonce.length === 0 && !data1.annonceloud && (
            <Alert variant="warning"> There is no Announcments</Alert>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Announcement;
