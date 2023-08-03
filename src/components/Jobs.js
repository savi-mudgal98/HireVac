import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaLocationDot} from 'react-icons/fa6';
import {FaMoneyBillAlt} from 'react-icons/fa';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Jobs = () => {
  return (
<>

      <h1 style={{marginTop:'8rem', fontWeight:'600', fontSize:'25px'}}>Recent Jobs....</h1>

      <div className='jobs'>

      <Container>

      <Row>
      <Col xs={12} md={6}>
      <Card style={{ width: '30rem' }} className='col-lg-6 col-md-6 col-sm-6'> 
      <Card.Body  className='card'>
        <div className='j1'>
        <img src="/images/job1.png" alt=''/>
        <div>
        <Card.Title>Software Engineer</Card.Title>
        <Card.Text className='j2'>
       <FaLocationDot/>   <span>Delhi</span>
       <FaMoneyBillAlt/>   <span>Rs.30,000/mo</span>
        </Card.Text>
        </div>
        </div>
        <div className='apply'>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <Button variant="outline-primary">Apply Now</Button>
        </div>
      </Card.Body>
    </Card> </Col>

    <Col xs={12} md={6}>
    <Card style={{ width: '30rem' }} className='col-lg-6 col-md-6 col-sm-6'> 
      <Card.Body  className='card'>
        <div className='j1'>
        <img src="/images/job2.png" alt=''/>
        <div>
        <Card.Title>DevOps Engineer</Card.Title>
        <Card.Text className='j2'>
       <FaLocationDot/>  <span>Delhi</span>
       <FaMoneyBillAlt/>   <span>Rs.30,000/mo</span>
        </Card.Text>
        </div>
        </div>
        <div className='apply'>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <Button variant="outline-primary">Apply Now</Button>
        </div>
      </Card.Body>
    </Card> </Col>
    </Row>

    <Row>
    <Col xs={12} md={6}>
    <Card style={{ width: '30rem' }} className='col-lg-6 col-md-6 col-sm-6'> 
      <Card.Body  className='card'>
        <div className='j1'>
        <img src="/images/job3.png" alt=''/>
        <div>
        <Card.Title>FullStack Developer</Card.Title>
        <Card.Text className='j2'>
       <FaLocationDot/>   <span>Delhi</span>
       <FaMoneyBillAlt/>   <span>Rs.30,000/mo</span>
        </Card.Text>
        </div>
        </div>
        <div className='apply'>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <Button variant="outline-primary">Apply Now</Button>
        </div>
      </Card.Body>
    </Card></Col>


    <Col xs={12} md={6}>
    <Card style={{ width: '30rem' }} className='col-lg-6 col-md-6 col-sm-6'> 
      <Card.Body  className='card'>
        <div className='j1'>
        <img src="/images/job2.png" alt=''/>
        <div>
        <Card.Title>Automation Engineer</Card.Title>
        <Card.Text className='j2'>
       <FaLocationDot/>   <span>Delhi</span>  
       <FaMoneyBillAlt/>   <span>Rs.30,000/mo</span>
        </Card.Text>
        </div>
        </div>
        <div className='apply'>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <Button variant="outline-primary">Apply Now</Button>
        </div>
      </Card.Body>
    </Card></Col>
    </Row>
 
   <Row>
   <Col xs={12} md={6}>
    <Card style={{ width: '30rem' }} className='col-lg-6 col-md-6 col-sm-6'> 
      <Card.Body  className='card'>
        <div className='j1'>
        <img src="/images/job3.png" alt=''/>
        <div>
        <Card.Title>Data Scientist</Card.Title>
        <Card.Text className='j2'>
       <FaLocationDot/>    <span>Delhi</span>
       <FaMoneyBillAlt/>    <span>Rs.30,000/mo</span>
        </Card.Text>
        </div>
        </div>
        <div className='apply'>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <Button variant="outline-primary">Apply Now</Button>
        </div>
      </Card.Body>
    </Card></Col>

    <Col xs={12} md={6}>
    <Card style={{ width: '30rem' }} className='col-lg-6 col-md-6 col-sm-6'> 
      <Card.Body  className='card'>
        <div className='j1'>
        <img src="/images/job1.png" alt=''/>
        <div>
        <Card.Title>Backend developer</Card.Title>
        <Card.Text className='j2'>
       <FaLocationDot/>  <span>Delhi</span>
       <FaMoneyBillAlt/>  <span>Rs.30,000/mo</span>
        </Card.Text>
        </div>
        </div>
        <div className='apply'>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <Button variant="outline-primary">Apply Now</Button>
        </div>
      </Card.Body>
    </Card></Col>
    </Row>

    </Container>
    </div>
   
    </>
  )
}

export default Jobs