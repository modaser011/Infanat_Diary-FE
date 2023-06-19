import React from 'react';
import d from "./allPosts.module.css";
import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import Comment from "../../../assets/comment.png";
import ProfilePicture from "../../../assets/baby.png";
import delete1 from "../../../assets/delete.png";
import EditPost from "./EditPost";
import { useParams } from "react-router-dom";
import { useContext,useState,useEffect } from "react";
import { vacBabyContext } from "../../../data/vacBabydata";
const PostDetails = () => {
    const tkn = useContext(vacBabyContext);
    const ID = useParams();
    const [details, setDetails] = useState({});
    const detailsPost = async () => {
      await axios
        .get(
          `https://infant-diary-backend.onrender.com/api/v1/post/${ID.id}`,
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
            setDetails(res.data.document);
          } else {
            alert(res.data.Error);
          }
        });
    };
    return (
        <div id={d.cont} className="justify-content-center align-content-center">
           <Container className='mx-auto' >
            <Col className='d-block col-md-8 mx-auto bg-white py-3 border-right border-left border-dark vh-100'>
            <Col className='d-flex border-bottom border-dark'>
                <Col className='d-flex px-3'>
            <div className="post__left">
                  <div className="post__imgContainer me-2">
                    <img className="post__img" src={ProfilePicture} alt="" />
                  </div>
                </div>
                <div className="post__right">
                  <div className="post__rightUsername">
                    <span>createdBy</span>
                  </div>
                  <div
                    className="post__body"
                    style={{ overflowWrap: "anywhere",marginTop:'-.6rem' ,marginBottom:'-1.4rem'}}
                  >
                    <span>body</span>
                    <hr/>
                    <div style={{marginTop:'-1rem'}}>
                    <span className='d-block mb-0' style={{ color: "grey" }}>5 hours ago</span>
                    <span>comments.length</span>
</div>
                  </div>
                  <hr/>
                  <div className="post__comment" style={{marginTop:'-1rem',marginBottom:'1rem'}}>
                    <img className="post__commentImage" src={Comment} alt="" />
                  </div>
                </div>
                <div className="d-block">
                <EditPost/>
                  <img
                    src={delete1}
                    alt=""
                    style={{ height: "18px", width: "18px", cursor: "pointer" }}
                    
                  />
                </div>
                </Col>
                </Col>
            </Col>
            </Container> 
        </div>
    );
}

export default PostDetails;
