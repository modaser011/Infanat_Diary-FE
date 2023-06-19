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
import axios from "axios";
import search from '../../../assets/search.svg'
import { Link } from "react-router-dom";

const Post = () => {
  const data1 = useContext(vacBabyContext);
  useEffect(() => {
    setTimeout(() => {
      data1.setX1(true);
    }, 1000);
    data1.postsDetails();
  }, [data1.changePost]);
  const[keyword,setKeyword]=useState("");

  const deletePost = async (id) => {
    console.log(id)
    await axios
      .delete(`https://infant-diary-backend.onrender.com/api/v1/post/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${data1.token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          data1.setChangePost(!data1.changePost);
        } else {
          alert(res.data.Error);
        }
      });
  };
  return (
    <div id={d.cont} className="justify-content-center align-content-center">
      <Row className="justify-content-between pt-4 pb-5 d-flex container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "blue" }}>All Posts</h1>
          <AddPost />
        </div>
        <hr />
        <Col className="col-md-3 align-items-start justify-content-center text-center pb-md-5 mt-xs-0 mt-sm-0 ">
          <div id={d.search} className="bg-white">
            <h6 className="text-start ms-3 mt-2">search for post</h6>
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
          {data1.posts.length >= 1 ? (
            data1.posts.map(({ body, createdBy, comments, _id }, idx) => (
              <div
                className="post__container container bg-white mb-3"
                key={idx}
              >
                
                
                <div className="post__left">
                  <div className="post__imgContainer">
                    <img className="post__img" src={ProfilePicture} alt="" />
                  </div>
                </div>
                <div className="post__right">
                  <div className="post__rightUsername">
                    <span>{createdBy}</span>
                    <br />
                    <span style={{ color: "grey" }}>5 hours ago</span>
                  </div>
                  <div
                    className="post__body"
                    style={{ overflowWrap: "anywhere" }}
                  >
                    <span>{body}</span>
                  </div>
                  <Link to={`/post/${_id}`} style={{textDecoration:'none',color:'black'}}><div className="post__comment ">
                  <img className="post__commentImage mt-1" src={Comment} alt="" />
                      <span className="">{comments.length}</span>
                  </div></Link>
                </div>
                
                <div className="d-block">
                  <EditPost _id={_id} body={body} />
                  <img
                    src={delete1}
                    alt=""
                    style={{ height: "18px", width: "18px", cursor: "pointer" }}
                    onClick={()=>
                      deletePost(_id)
                    }
                  />
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
          {data1.posts.length === 0 && data1.loud3 && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
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
