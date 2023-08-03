import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import '../App.css'

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const Testimonial = () => {
   
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

  return (
    <div className='slide'>

<h1 style={{marginTop:'8rem ', textAlign:'center', fontWeight:'600', fontSize:'25px'}}>Our Achievers</h1>
        <Slider {...settings}>
          <div>
        
            <Card style={{ width: '25rem' }} >
      <Card.Img variant="top" src="/images/comp1.png" style={{ width: '10rem', height:'5rem' }}/>
      <Card.Body >
        <div className='company'>
        <img src="/images/person1.jpg" alt=''/>
        <div>
        <Card.Title>Yadhu Manoharan</Card.Title>
        <span>Sr. iOS Engineer</span></div>
        </div>
        <Card.Text>
        Hirevac was able to make the process really easy. They were able to schedule 
        interviews with the best companies in the industry and drove the entire process smoothly.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div>
      
            <Card style={{ width: '25rem' }} >
      <Card.Img variant="top" src="/images/comp2.png" style={{ width: '10rem', height:'5rem' }}/>
      <Card.Body >
        <div className='company'>
        <img src="/images/person2.jpg" alt=''/>
        <div>
        <Card.Title>Santosh Nain</Card.Title>
        <span>SDE-2</span></div>
        </div>
        <Card.Text>
        A friend of mine told me about TopHire when I 
        started looking for new opportunities. The TopHire team was extremely helpful, professional and quick with everything.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div>
           
            <Card style={{ width: '25rem' }} >
      <Card.Img variant="top" src="/images/comp3.png" style={{ width: '10rem', height:'5rem' }}/>
      <Card.Body >
        <div className='company'>
        <img src="/images/person3.jpg" alt=''/>
        <div>
        <Card.Title>Tarun Dugar</Card.Title>
        <span>Sr. Software Engineer</span></div>
        </div>
        <Card.Text>
        Compared to other job portals, what stood out for me was that TopHire,
         on top of providing really good opportunities, helped me in negotiations with the companies too.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div>
       
            <Card style={{ width: '25rem' }} >
      <Card.Img variant="top" src="/images/comp1.png" style={{ width: '10rem', height:'5rem' }}/>
      <Card.Body >
        <div className='company'>
        <img src="/images/person4.jpeg" alt=''/>
        <div>
        <Card.Title>Rahul Dubey</Card.Title>
        <span>Web Designer</span></div>
        </div>
        <Card.Text>
        Hirevac was able to make the process really easy. They were able to schedule 
        interviews with the best companies in the industry and drove the entire process smoothly.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div>
           
            <Card style={{ width: '25rem' }} >
      <Card.Img variant="top" src="/images/comp3.png" style={{ width: '10rem', height:'5rem' }}/>
      <Card.Body >
        <div className='company'>
        <img src="/images/person5.jpeg" alt=''/>
        <div>
        <Card.Title>Ria Das</Card.Title>
        <span>Operation Exec.</span></div>
        </div>
        <Card.Text>
        A friend of mine told me about TopHire when I 
        started looking for new opportunities. The TopHire team was extremely helpful, professional and quick with everything.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div>
         
            <Card style={{ width: '25rem' }} >
      <Card.Img variant="top" src="/images/comp2.png" style={{ width: '10rem', height:'7rem' }}/>
      <Card.Body >
        <div className='company'>
        <img src="/images/person6.jpeg" alt=''/>
        <div>
        <Card.Title>Rakesh Saini</Card.Title>
        <span>Software Engineer</span></div>
        </div>
        <Card.Text>
        Compared to other job portals, what stood out for me was that TopHire,
         on top of providing really good opportunities, helped me in negotiations with the companies too.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </Slider>
    </div>
  )
}

export default Testimonial