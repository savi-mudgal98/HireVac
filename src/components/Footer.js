import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {BiLogoLinkedinSquare} from 'react-icons/bi'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'


const Footer = () => {
  return (

    <>
    <div className='footer'>
    
    <Row>
     
      <Col xs={12} md={6} lg={3}>
       <h3>Hirevac</h3>
       <p>TopHire is on a mission to make it dead simple
         for leading Indian startups to hire 
         the top 2% of tech talent.</p>
       <FaTwitter className='icons'/>
       <AiFillInstagram  className='icons'/>
       <BsFacebook  className='icons'/>
       <BiLogoLinkedinSquare  className='icons'/>
       </Col>
       
       <Col xs={12} md={6} lg={3}>
       <h6>CANDIDATES</h6>
       <p>For Candidates</p>
       <p>Candidate Sign Up</p>
       <p>Invite & Earn ₹15k</p>
       <p>Candidate FAQ</p>
       </Col>

       <Col xs={12} md={6} lg={3}>
       <h6>EMPLOYERS</h6>
       <p>For Employers</p>
       <p>Employer Sign Up</p>
       <p>Employer FAQ</p>
       </Col>
      
       <Col xs={12} md={6} lg={3}>
      <h6>COMPANY</h6>
      <p>Careers</p>
      <p>Privacy Policy</p>
      </Col>

      </Row>

  
    </div>
      <footer><p>© 2023 SPSG TopHire. All Rights Reserved</p></footer>
      </>
  )
}

export default Footer