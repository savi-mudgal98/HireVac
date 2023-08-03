import React from 'react'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css'



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const cities = [
  'Delhi',
  'Noida',
  'Gurugram',
  'Mumbai',
  'Pune',
  'Agra',
  'Surat',
  'Jaipur',
  'Bangalore',
  'Chandigarh',
];


function getStyles_city(city, cityName, theme) {
  return {
    fontWeight:
      cityName.indexOf(city) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const jobs = [
    'Software Engineer',
    'Data Scientist',
    'DevOps Engineer',
    'Full-Stack Developer',
    'Backend Developer',
    'Front-end developer',
    'Automation Engineer',
    'Networking Engineer',
    'Web designer',
    'Android developer',
  ];

  function getStyles_job(job, jobName, theme) {
    return {
      fontWeight:
      jobName.indexOf(job) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }


const Main = () => {

    const theme = useTheme();
    const [cityName, setCityName] = React.useState([]);
    const [jobName, setJobName] = React.useState([]);


    const handleChange_city = (event) => {
        const {
          target: { value },
        } = event;
        setCityName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

      const handleChange_job = (event) => {
        const {
          target: { value },
        } = event;
        setJobName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
   
      const [state, setState] = React.useState({
        part: true,
        full: false,
       
      });
    
      const handleChange_Sel = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
      const { part,full } = state;

 
  return (
    <>
    <div className='main'>
         <div>
        <h1>BUILD YOUR POWERFUL CAREER</h1>
        <p>Get multiple interview requests with upfront salary offers within days.</p>
        
        {/* <input placeholder='Search Jobs....' style={{height:'80px', width:'150px'}}/> */}
        <Row>
        <Col xs={12} md={4}>
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
      <Select
        multiple
        style={{backgroundColor:'white'}}
        displayEmpty
        value={cityName}
        onChange={handleChange_city}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>All Locations..</em>;
          }

          return selected.join(', ');
        }}
        MenuProps={MenuProps}
        inputProps={{ 'aria-label': 'Without label' }}
        
      >
        <MenuItem disabled value="">
          <em>All Locations..</em>
        </MenuItem>
        {cities.map((city) => (
          <MenuItem
            key={city}
            value={city}
            style={getStyles_city(city, cityName, theme)}
          >
            {city}
          </MenuItem>
        ))}
      </Select>
    </FormControl> </Col>

    <Col xs={12} md={4}>
      <FormControl sx={{ m: 1, width: 300, mt: 3}} >
        <Select
          multiple
         style={{backgroundColor:'white'}}
          displayEmpty
          value={jobName}
          onChange={handleChange_job}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Jobs</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Jobs</em>
          </MenuItem>
          {jobs.map((job) => (
            <MenuItem
              key={job}
              value={job}
              style={getStyles_job(job, jobName, theme)}
            >
              {job}
            </MenuItem>
          ))}
        </Select>
      </FormControl></Col>

      <Col xs={12} md={4}>
      <Button variant="danger">Apply Now</Button>
      </Col>
      </Row>

      <Box>
        <FormControl component="fieldset" variant="standard">
    <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
      <FormControlLabel
        control={<Checkbox checked={part} onChange={handleChange_Sel}  name='part' style={{ color: 'white' }} />}
        label="Part-time" 
      />
      <FormControlLabel
        control={<Checkbox checked={full} onChange={handleChange_Sel} name='full' style={{ color: 'white' }} />}
        label="Full-time"
      />
    
    </FormGroup>
  </FormControl>
</Box>

</div>
</div>



<Container className="features d-flex">
<Row>

<Col xs={12} lg={4}>
  <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' , minWidth:'50vh'  }} className='feature'>
        <div>
    <h2>3x</h2>
    <p>faster candidate submissions</p></div>
          </Box>
      </Container>
    </React.Fragment>
</Col>

<Col xs={12} lg={4}>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' , minWidth:'50vh' }} className='feature'>
        <div>
  <h2>30%</h2>
    <p>more candidate placements</p></div>                                   
          </Box>
      </Container>
    </React.Fragment>
    </Col>

    <Col xs={12} lg={4}>    
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '20vh', minWidth:'50vh' }} className='feature' >
        <h2>100%</h2>
        <p>client satisfaction</p>
          </Box>
      </Container>
    </React.Fragment>
    </Col>

 </Row>
</Container>

</>
 
  )
}

export default Main