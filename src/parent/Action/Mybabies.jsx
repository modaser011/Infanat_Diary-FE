import { Button, Col, Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import d from './babies.module.css'
import AddBaby from './addBaby'; 
const Mybabies = ({data}) => {
          return (
            <Container className='justify-content-center'id={d.cont} >
           {data.length >=1?<AddBaby/>:<div></div>}
              <Row className='justify-content-start align-content-center' >
      {data.length >=1?<h1 style={{marginBottom:'-1rem'}} id={d.hh} className='ms-sm-4 '>All my Babies</h1>:<p></p>}
                {data.length >=1? data.map(({name,birthData,gender,weight,headDiameter,height},idx)=>(
     <Col className='col-12 col-sm-6 col-md-4 col-lg-4 mb-2 mt-5 col-xxl-2 col-xl-3' key={idx}  id={d.col}>
      
<Card id={d.card}  w-100>
   <Card.Img src="image.jpg" className="card__image" alt="hu"  id={d.card__image}/>
   
  <div  id={d.card__overlay}>
    <div className='align-content-center text-center pt-4' id={d.overlay_text}>
<p> Name: {name}</p>
<p> Birth date: {birthData}</p>
<p> Gender: {gender}</p>
<p> Weight: {weight} GM</p>
<p> Height: {height} Cm</p>
<p> HeadDiameter: {headDiameter} Cm</p>
</div>
<div className='d-flex text-center justify-content-center' id={d.btn}>
<Button  className="justify-content-center text-center align-items-center btn  rounded-pill d-flex" variant="outline-primary"id={d.overlay_text_btn} > <img src="vac.png" className="me-1" alt="" id={d.img}/>
 Vaccines</Button >
<Button  className="justify-content-center text-center align-items-center  btn  rounded-pill d-flex" variant="outline-primary" id={d.overlay_text_btn}>  <img src="report.png" className="me-1" alt="" id={d.img}/>
 Reports</Button >
<Button className="justify-content-center text-center align-items-center  btn  rounded-pill d-flex" variant="outline-primary" id={d.overlay_text_btn2}> 
 <img src="delete.png" className="me-1" alt="" id={d.img}/>
     Remove</Button >
</div>
</div>
</Card>
</Col> 

      ))
      :         
      <p className='text center'>you don't have any Babies<AddBaby/></p>
     }
              </Row>

          </Container>      );
          }
export default Mybabies;
