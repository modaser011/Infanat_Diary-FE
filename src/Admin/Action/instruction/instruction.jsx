import instruction from "../../../assets/instru12.png";
import React, { useContext, useEffect, useState } from "react";
import d from "./instru.module.css";
import { Alert, Col, Form, Row, Spinner } from "react-bootstrap";
import { vacBabyContext } from "../../../data/vacBabydata";
import AddInstruction from "./addInstruction";
import { useNavigate } from "react-router-dom";
const Istruction = () => {
  const nav = useNavigate();
  const data1 = useContext(vacBabyContext);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    data1.informationDetails(keyword);
  }, [data1.changeInfo]);

  const filtration=(re)=>
  {let count=0
    console.log(re)
if(re.length>=1)
{
    for(let i=0;i<re.length;i++)
    {
        if(re[i].type==='instruction')
        {count++}
    }
}
return count
  }

  return (
    <div id={d.cont} className="justify-content-center align-content-center">
      <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "blue" }}>All Instructions</h1>
          <AddInstruction />
        </div>
        <hr />
        <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0 ">
          <div id={d.search} className="bg-white">
            <h6 className="text-start ms-3 mt-2">search for instruction</h6>
            <hr />
            <Form.Control
              className="mx-1 mb-2"
              style={{
                width: "95%",
                height: "2.7rem",
              }}
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </Col>

        <Col md={true} className="col-md-9 mx-0 mt-3 mt-md-0">
          {data1.information1.length >= 1 ? (
            data1.information1.map(({ topic, _id, type, age }) => (
              type==='instruction'&&
              (
              <div
                className="post__container container bg-white mb-3"
                style={{ cursor: "pointer" }}
                key={_id}
              >
                <div className="post__right ">
                  <Row className="d-flex" style={{ overflowWrap: "anywhere" }}>
                    <Col xs={3} md={3} lg={2} className="me-2">
                      <img
                        src={instruction }
                        className="img-responsive ms-3 w-100 "
                        alt=""
                      />
                    </Col>
                    <Col className=" col ms-4">
                      <h2
                        style={{ fontWeight: "bold", color: "blue" }}
                        className="mb-4"
                      >
                        Topic name: {topic}
                      </h2>
                      <h4 style={{ fontWeight: "bold" }}>Age: {age} months</h4>
                    </Col>
                  </Row>
                </div>
              </div>)
            ))
          ) : (
            <></>
          )}
          {data1.information1.length === 0 && data1.infoLoud && (
            <div className="d-flex justify-content-center align-items-center">
              <Spinner className="my-auto " animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {filtration(data1.information1) === 0 && !data1.infoLoud && (
            <Alert variant="warning" className="text-center">
              There is no instructions
            </Alert>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Istruction;
