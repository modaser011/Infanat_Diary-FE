import delete1 from "../../../assets/delete.png";
import React, { useContext, useEffect, useState } from "react";
import d from "./announce.module.css";
import { Alert, Col, Form, Row, Spinner } from "react-bootstrap";
import { vacBabyContext } from "../../../data/vacBabydata";
import axios from "axios";
import AddAnnounce from "./AddAnnounce";
import EditAnnounce from "./EditAnnonce";
import ann from "../../../assets/speaker-icon.png";

const Announce = () => {
  const data1 = useContext(vacBabyContext);
  console.log(localStorage.getItem("token"));
  useEffect(() => {
    setTimeout(() => {
      data1.setX1(true);
    }, 1000);
    data1.announcements();
  }, [data1.changeannonce]);

  const [keyword, setKeyword] = useState("");

  const deleteannounce = async (id) => {
    console.log(id);
    await axios
      .delete(
        `https://infant-diary-backend.onrender.com/api/v1/announcement/${id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          data1.setChangeAnnonce(!data1.changeannonce);
        } else {
          alert(res.data.Error);
        }
      });
  };
  return (
    <div id={d.cont} className="justify-content-center align-content-center">
      <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "blue" }}>All Announcements</h1>
          <AddAnnounce />
        </div>
        <hr />
        <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0 ">
          <div id={d.search} className="bg-white">
            <h6 className="text-start ms-3 mt-2">search for announcement</h6>
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
          {data1.annonce.length >= 1 ? (
            data1.annonce.map(({ body, _id, title }, idx) => (
              <div
                className="post__container container bg-white mb-3"
                key={_id}
              >
                <div className="post__right">
                  <div
                    className="post__body"
                    style={{ overflowWrap: "anywhere" }}
                  >
                    <span>{body}</span>
                  </div>
                </div>
                <div className="d-block" style={{ marginTop: "-1rem" }}>
                  <img
                    src={delete1}
                    alt=""
                    style={{ height: "18px", width: "18px", cursor: "pointer" }}
                    onClick={() => deleteannounce(_id)}
                  />
                  <EditAnnounce _id={_id} body={body} title={title} />
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

export default Announce;
