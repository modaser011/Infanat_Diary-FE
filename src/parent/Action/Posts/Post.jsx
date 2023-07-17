import ProfilePicture from "../../../assets/baby.png";
import delete1 from "../../../assets/delete.png";
import React, { useContext, useEffect,useState } from "react";
import "./post.css";
import d from "./allPosts.module.css";
import Comment from "../../../assets/comment.png";
import { Alert, Col, Form, Row, Spinner } from "react-bootstrap";
import { vacBabyContext } from "../../../data/vacBabydata";
import AddPost from "./addPost";
import EditPost from "./EditPost";
import {useNavigate} from "react-router-dom";
const Post = () => {
  const data1 = useContext(vacBabyContext);
  const nav=useNavigate()
  const[keyword,setKeyword]=useState("");

  const counter=(s)=>
  {
    let z=0
    for (let i=0;i<s.length;i++)
    {
    z+=s[i].replies.length
    }
    return z
  }
  useEffect(() => {
    setTimeout(() => {
      data1.setX1(true);
    }, 1000);
    data1.postsDetails(keyword);
  }, [data1.changePost,keyword]);

  return (
    <div id={d.cont} className="justify-content-center align-content-center">
      <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "#006AD4" }}>All Posts</h1>
          <AddPost />
        </div>
        <hr />
        <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0 ">
          <div id={d.search} className="bg-white">
            <h6 className="text-start ms-3 mt-2">search for post</h6>
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
              onChange={(e)=>setKeyword(e.target.value)}
            />
            
          </div>
        </Col>

        <Col md={true} className="col-md-9 mx-0 mt-3 mt-md-0">
          {data1.posts.length >= 1 ? (
            data1.posts.map(({ body,createdBy, comments, _id }) => (
              createdBy!==null&&(
              <div
                className="post__container container bg-white mb-3"
                key={_id}
              >
                <div className="post__left">
                  <div className="post__imgContainer">
                    <img className="post__img" src={ProfilePicture} alt="" />
                  </div>
                </div>
                <div className="post__right">
                  <div className="post__rightUsername">
                    <span>{createdBy.name}</span>
                    <br />
                    <span style={{marginTop:'-.5rem',color:'gray',fontSize:'.8rem',fontWeight:'600'}}>5 hours ago</span>
                  </div>
                  <div
                    className="post__body"
                    style={{ overflowWrap: "anywhere" }}
                  >
                    <span>{body}</span>
                  </div>
                  <div className="post__comment" style={{width:'fit-content'}} onClick={()=>nav(`/post/${_id}`)}>
                  <img className="post__commentImage mt-1" src={Comment} alt="" />
                 
                      <span className="">{comments.length+counter(comments)}</span>
                  </div>
                </div>
                {data1.user.userId===createdBy._id&&
                <div className="d-block">
                  <EditPost _id={_id} body={body} />
                  <img
                    src={delete1}
                    alt=""
                    style={{ height: "18px", width: "18px", cursor: "pointer" }}
                    onClick={()=>
                      data1.delettionForPosts("post",_id)
                    }
                  />
                </div>}
              </div>)
            ))
          ) : (
            <></>
          )}
          {data1.posts.length === 0 && data1.loud3 && (
           <div className="d-flex justify-content-center"> <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner></div>
          )}
          {data1.posts.length === 0 && !data1.loud3 && (
            <Alert variant="warning"> There is no posts</Alert>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Post;
