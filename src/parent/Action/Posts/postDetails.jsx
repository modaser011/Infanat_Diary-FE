import React from "react";
import d from "./allPosts.module.css";
import { Col, Container, Spinner } from "react-bootstrap";
import axios from "axios";
import ProfilePicture from "../../../assets/baby.png";
import delete1 from "../../../assets/delete.png";
import EditPost from "./EditPost";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
import AddComment from "./addcomment";
import dd from "./allPosts.module.css";
import EditComment from "./EditComment";
import AddReply from "./addReply";
import { useNavigate } from "react-router-dom";
import EditReply from "./EditReply";
const PostDetails = () => {
  const tkn = useContext(vacBabyContext);
  const ID = useParams();
  const [details, setDetails] = useState({});
  const [comments, setComments] = useState([]);
  const nav = useNavigate();
  const posts = "post";
  const comment = "comment/operation";
  const deletionPosts = async (word, id1) => {
    await axios
      .delete(
        `https://infant-diary-backend.onrender.com/api/v1/${word}/${id1}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          tkn.setChangePost(!tkn.changePost);
          alert(res.data.message);
          if (word === "post") {
            nav("/post");
          }
        } else {
          alert(res.data.Error);
        }
      });
  };


  const deletionReply = async (id) => {
    await axios
      .delete(
        `https://infant-diary-backend.onrender.com/api/v1/reply/operation/${id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          tkn.setChangePost(!tkn.changePost);
          alert(res.data.message);
        } else {
          alert(res.data.Error);
        }
      });
  };
  const counter=(s)=>
  {
    let z=0
    for (let i=0;i<s.length;i++)
    {
    z+=s[i].replies.length
    }
    return z
  }

  const detailsPost = async () => {
    await axios
      .get(`https://infant-diary-backend.onrender.com/api/v1/post/${ID.id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setDetails(res.data.post);
          setComments(res.data.post.comments);
        } else {
          alert(res.data.Error);
        }
      });
  };

  useEffect(() => {
    detailsPost();
  }, [tkn.changePost]);

  return (
    <div id={d.cont} className="justify-content-center align-content-center">
      <Container className="mx-auto container">
        <Col className=" col-md-7 mx-auto py-3 container" id={d.cont}>
          {Object.keys(details).length >= 1 >= 1 ? (
            <div id={d.contcol} className="py-3 px-3">
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="d-flex">
                      <img
                        src={ProfilePicture}
                        alt=""
                        className="img-responsive me-2 ms-2"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <p style={{ marginTop: ".1rem" }}>
                        {details.createdBy.name}
                      </p>
                    </div>
                    <div className="me-auto text-start ms-2">
                     
                      <p
                        style={{
                          color: "gray",
                          fontSize: ".8rem",
                          fontWeight: "600",
                          marginTop: "-1rem",
                        }}
                        className="text-start ms-5"
                      >
                        5 h
                      </p>
                    </div>
                  </div>
                  {tkn.user.userId===details.createdBy._id&&
                  <div style={{ marginTop: "-.7rem" }}>
                    <img
                      className="mx-2 my-2"
                      src={delete1}
                      alt=""
                      style={{
                        height: "20px",
                        width: "20px",
                        cursor: "pointer",
                        
                      }}
                      onClick={()=>deletionPosts(posts,details._id)}
                    />
                    <EditPost _id={details._id} body={details.body} />
                  </div>}
                </div>
                <div className="text-center"> {details.body} </div>
                <div className="d-flex justify-content-end me-2 mt-2">
                  <p
                    style={{
                      marginBottom: "-1rem",
                      color: "gray",
                      fontSize: ".8rem",
                      fontWeight: "700",
                    }}
                  >
                    {details.comments.length+counter(details.comments)} comment
                  </p>
                </div>
                <div>
                  <hr />
                  <AddComment />
                  <hr />
                </div>
              </div>
              {comments.length >= 1 ? (
                comments.map(({ body, createdBy, replies, _id }) => (
                  createdBy!==null&&(
                  <div className="mb-4">
                    <div className="d-flex mb-2">
                      <img
                        src={ProfilePicture}
                        alt=""
                        className="img-responsive me-1 ms-2"
                        style={{ width: "30px", height: "30px" }}
                      />
                      <p style={{ marginTop: "-.3rem" }}></p>
                      <div className="px-2" id={dd.divaya}>
                        <div className="d-flex justify-content-between">
                          <p
                            className="ms-2 mx-auto me-3 mt-1 mb-1"
                            style={{
                              color: "gray",
                              fontSize: ".8rem",
                              fontWeight: "600",
                            }}
                          >
                            {createdBy.name}
                          </p>
                          {tkn.user.userId===createdBy._id&&

                          <div className="d-flex">
                            <img
                              className="my-2"
                              src={delete1}
                              alt=""
                              style={{
                                height: "12px",
                                width: "12px",
                                cursor: "pointer",
                              }}
                              onClick={()=>deletionPosts(comment,_id)}

                            />
                            <EditComment
                              _id={_id}
                              body={body}
                            />
                          </div>}
                        </div>
                        <p
                          className="text-start ms-3"
                          style={{
                            color: "black",
                            fontSize: ".8rem",
                            fontWeight: "600",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {body}
                        </p>
                      </div>
                    </div>

                    <div
                      className="d-flex"
                      style={{
                        width: "fit-content",
                        marginLeft: "5rem",
                        marginTop: "-.55rem",
                        color: "gray",
                        fontSize: ".8rem",
                        fontWeight: "600",
                      }}
                    >
                      <AddReply _id={_id} /> <p>1 d</p>
                    </div>
                    {replies.length >= 1 ? (
                      replies.map(({ body, _id, createdBy }) => (
                        createdBy!==null&&(
                        <div
                          className="d-flex ms-4 mb-4"
                          style={{ marginTop: "-.5rem" }}
                        >
                          <img
                            src={ProfilePicture}
                            alt=""
                            className="img-responsive me-1 ms-2"
                            style={{ width: "30px", height: "30px" }}
                          />
                          <p style={{ marginTop: "-.3rem" }}></p>
                          <div className="px-2" id={dd.divaya}>
                            <div className="d-flex">
                              <p
                                className="ms-2 mx-auto me-3 mt-1 mb-1"
                                style={{
                                  color: "gray",
                                  fontSize: ".8rem",
                                  fontWeight: "600",
                                }}
                              >
                                
                                {createdBy.name}
                              </p>
                              {tkn.user.userId===createdBy._id&&

                              <div className="d-flex">
                                <img
                                  className="my-2"
                                  src={delete1}
                                  alt=""
                                  style={{
                                    height: "12px",
                                    width: "12px",
                                    cursor: "pointer",
                                  }}
                                  onClick={()=>deletionReply(_id)}
                                />
                                <EditReply _id={_id} body={body}/>
                              </div>
}
                            </div>
                            <p
                             className="text-start ms-3"
                             style={{
                               color: "black",
                               fontSize: ".8rem",
                               fontWeight: "600",
                               marginBottom: "0.5rem",
                             }}
                            >
                              {body}
                            </p>
                          </div>
                        </div>
                      )))
                    ) : (
                      <></>
                    )}
                  </div>
                )))
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div className="d-flex justify-content-center py-5 align-self-center my-5">
              {" "}
              <Spinner
                className="align-self-center"
                animation="border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
        </Col>
      </Container>
    </div>
  );
};

export default PostDetails;
