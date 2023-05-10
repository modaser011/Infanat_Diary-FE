import React from 'react';
import { Col, Row } from 'react-bootstrap';
import d from './chatting.module.css'
import AddPost from './addPost';
const Chatting = () => {
    return (
        <div className='justify-content-center align-content-center text-center d-flex container' id={d.cont}>
            <Row className=' container'style={{border:'1px solid', borderRadius:'10px'}}>
                <Col className='col-5' style={{borderRight:'1px solid'}}>
                    <AddPost/>
{/* <img src="lgo.png" alt="" />nasldsadnasljn */}
<div  style={{border:'0 0 1px 0 solid'}} className='d-flex align-content-center my-auto'>
<img src='baby.png' width="132"
              height="90"
              className="d-inline-block align-center mx-3 rounded-pill bg-dark my-1" alt="" />
              <h3 className='align-self-center'>IslamAboouf</h3>
</div>
<div>
</div>
                </Col>
                <Col lg={true} className='col-7 bg-white'>
                </Col>
            </Row>
        </div>
    );
}

export default Chatting;
