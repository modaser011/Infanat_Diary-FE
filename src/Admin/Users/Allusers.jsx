import React from 'react';
import {Col,Row, Container} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import d from "./Users.module.css";
import Form from 'react-bootstrap/Form';
const Allusers = ({searcher,setsearcher,search}) => {
    const datax=searcher.map(({png,id,link},idx)=>(
        <tr key={idx} className="align-content-center">
        <td className='ps-3'>{idx+1}</td>
        <td><img id={d.img}src={png} alt="" className='me-4'/>{id}</td>
        <td> rr</td>
        <td className="d-flex justify-content-end me-3"> <button className="d-flex justify-content-center text-center align-items-center me-3" variant="primary" type="submit" id={d.buttun2}>
    <img src="google.png" className="h-50 h-50 me-3" alt="" id={d.img2}/>
      suspend
        </button>
        <button className="d-flex justify-content-center text-center align-items-center" variant="primary" type="submit" id={d.buttun2}>
    <img src="google.png" className="h-50 h-50 me-3" alt="" id={d.img2}/>
     delete
        </button></td>
       
      </tr>
    )
    )
    return (
        <Container fluid className="justify-content-center" id={d.cont2}>
        <Row className=" justify-content-center align-content-center"id={d.cont2}> 
        <Col className="col-md-11  col-lg-11  justify-content-center  text-center pb-md-3 ">
        <Table id={d.table}>
      <thead>
      <tr >
          <th className='pb-4 pt-4 px-5 ' colSpan={3}>Users List</th>
          <th className='pb-3 pt-4 me-auto pe-3 justify-content-end text-end d-flex' colSpan={1}><Form.Control
          style={{
            width:"250px"
            ,height:"2.2rem"
          }}
              type="search"
              placeholder="Search"
              aria-label="Search"
              className='rounded-pill text-center'
              value={search}
              onChange={(e)=>setsearcher(e)}
            /></th>
        </tr>
        <tr>
          <th className='ps-3'>No</th>
          <th>First Name</th>
          <th> xx</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
     {datax} 
      </tbody>
    </Table>
       </Col>
       </Row>
     </Container>
    );
}

export default Allusers;
