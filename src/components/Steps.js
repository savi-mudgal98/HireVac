import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

const Steps = () => {
  return (
<>
<h1 style={{marginTop:'8rem', textAlign:'center', fontWeight:'600', fontSize:'25px'}}>HOW IT WORKS</h1>
<div className='steps'>

<Row>
<Col xs={12} md={6}>
<React.Fragment>
<CssBaseline />
<Container maxWidth="sm" className='step1'>
  <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' , minWidth:'70vh'}} className='step'>
    <div>
     <img className='pics' src='/images/resume.png' alt=''/>
    <h2>STEP 1: COMPLETE PROFILE</h2>
    <p>Once you are approved, we showcase you to leading Indian technology startups.</p>
    </div>
  </Box>
</Container>
</React.Fragment>
</Col>

<Col xs={12} md={6}>
<React.Fragment>
<Box sx={{ bgcolor: 'transparent', height: '40vh' , minWidth:'70vh'}} />
</React.Fragment>
</Col>
</Row>

<Row>
<Col xs={12} md={6}>
<React.Fragment>
<Box sx={{ bgcolor: 'transparent', height: '40vh' , minWidth:'70vh'}} />
</React.Fragment>
</Col>

<Col xs={12} md={6}>
<React.Fragment>
<CssBaseline />
<Container maxWidth="sm" className='step2'>
  <Box sx={{ bgcolor: '#cfe8fc',  height: '40vh' , minWidth:'70vh'}} className='step'>
    <div >
      <img className='pics' src='/images/jobs.png'  alt=''/>
  <h2>STEP 2: RECEIVE JOB OFFERS</h2>
    <p>Companies start sending interview requests. Talk to only the ones you like.</p>
    </div>
    </Box>
</Container>
</React.Fragment>
</Col>

</Row>

<Row>
<Col xs={12} md={6}>
<React.Fragment>
<CssBaseline />
<Container maxWidth="sm" className='step3'>
  <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' , minWidth:'70vh'}} className='step'>
  <div>
  <img className='pics' src='/images/dream.png'  alt=''/>
  <h2>STEP 3: ACCEPT DREAM JOB</h2>
    <p>Compare your offers and accept the best one. Hired!</p>
    </div>
  </Box>
</Container>
</React.Fragment>
</Col>

<Col xs={12} md={6}>
<React.Fragment>
<Box sx={{ bgcolor: 'transparent', height: '40vh' , minWidth:'70vh'}} />
</React.Fragment>
</Col>
</Row>
</div>
 
</>
  )
}

export default Steps