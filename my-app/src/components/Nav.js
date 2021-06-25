import { Navbar,Nav, Button,Container,Row,Col} from 'react-bootstrap';


const NavBar= () => {


    return(
        <div>


    <Navbar bg=""  variant="light" expand="lg" className='w-100' collapseOnSelect>
    <Navbar.Brand href="#home">
      <img
        src="/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Button variant="outline-dark animate__animated animate__pulse pulse">Connect</Button>{' '}
    <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="ml-auto"/>
  <Navbar.Collapse id="responsive-navbar-nav" className="nav justify-content-end mr-auto" >
  <Nav className="">
  
          <Nav.Link href="#" className='pr-5'>Home</Nav.Link>
          <Nav.Link href="#" className='pr-5'>About Us</Nav.Link>
          <Nav.Link href="#" className='pr-5'>Contact</Nav.Link>
</Nav>
</Navbar.Collapse>
  </Navbar>
 
</div>
    )



}

export default NavBar;