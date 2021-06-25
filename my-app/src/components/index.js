import { Navbar, Container, Col, Row, Card, Button  } from 'react-bootstrap';
import Typical from 'react-typical'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';




const Home= () => {

    useEffect(() => {
      Aos.init({duration: 2000 });
    })


    return (

        <div >
<Container className='mt-5' >
  <Row>
    <Col sm={7} className="view" >
    <div className="header pt-5">
    <p className="font display-1 animate__animated animate__slideInLeft "  >SOCIAL MOOLAH</p>
    <p className='display-4 font2 animate__animated animate__slideInLeft'> Create your on CryptoCurrency and use it to <Typical 
        loop={Infinity}
        wrapper='b'
        steps={[
            'Make payment',
            1000,
            'SWAP',
            1000,
            'BUY AND SELL',
            1000,
            
        ]}

        />
        
        </p>
    </div>
    </Col>
    <Col sm={5}>
         <div className="">
            <div className="">
              <img className="w-100 animate__animated animate__bounce BgLogo pt-5" data-aos='fade-right' src="/images/img.png" alt="eth logo"/>
            </div>
    </div>
        </Col> 
  </Row>
  </Container>

  <Container data-aos='fade-up '>
      <div className='text-center mt-5' style={{  display: "flex", justifyContent: "center", alignItems: "center" ,height: '100%' ,flexDirection:'column',
    margin: '0'}}> 
        <h2 className=' pt-5  lead font3 '> Say hello to the team</h2>
        
    <p style={{maxWidth:'50rem', }} className="text-center lead font4 "> lorembhldijavnvjpoifhvanfdvjisfg feknbsjdfvniuahnoisvdkLNX cdiuavjnkuifzdsjkcxqawsedrftghyujikol.,kmjnhbgvfcdxcvbnjmk,kmjnhbgvfcd vbnmnb</p>
    </div>
  </Container>

  <Container data-aos='slide-right'>
      <h2 className=' pt-5 text-center lead font3 mt-5' > The Economy of Social Money</h2>

      <Row>
      <Col sm={3}>
          <img className="" src="/images/img2.png" style={{ width: '50rem', marginLeft:'-29rem' }}/>
      </Col>
    <Col sm={9}>
    <Row className='mt-5 justify-center' style={{  display: "flex", flexDirection:'row'}}>
    <Col style={{ maxwidth: '20rem',   }} className='mr-3 justify-center'> lThe Google Story is a book by David Vise and Mark Malseed that takes an in-depublished on November 15, 2005.</Col>
    <Col style={{ maxwidth: '20rem' }} className='mr-3 justify-center'>lThe Google Story is a book by David Vise and Mark Malseed that  takes avember 15, 2005.</Col>
    <Col style={{ maxwidth: '20rem' }}>l culture that ook who founded the company and whyd on November 15, 2005.known for. This book is in English and was published on November 15, 2005.</Col>
  </Row></Col>
   
  </Row>
    
  </Container>
  
        </div>
    )
}

export default Home;