import { useState,useEffect } from "react";
import {Navbar,Container, Nav, Button} from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";



export const NavBar = () => {
  const[activeLink,setActiveLink] = useState('home');
  const [scrolled,seScrolled] = useState('false');
  useEffect (() => {
    const onScroll =() => {
      if (window.scrolly > 50){
        seScrolled(true);

      }else{
        seScrolled(false);

        }
      

    }
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll",onScroll);


  }, [])
  const onUpdateActiveLink =(value) =>{
    setActiveLink(value);

  } 
    return(
      <Navbar expand ="lg" className ={scrolled ? "scrolled":""}>
       <Container>
        
        <Navbar.Brand href="#home">
          <img src ={'https://www.svgrepo.com/show/303151/slack-logo.svg'} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className ="navbar-toggle-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#home" className ={activeLink ==='home' ?'active navbar-link':'navbar-link'}onClick ={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className ={activeLink ==='skills' ?'active navbar-link':'navbar-link'}onClick ={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className ={activeLink ==='project' ?'active navbar-link':'navbar-link'}onClick ={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            
            
            
          </Nav>
          <span className ="navbar-text">
            <div className = "social-icon">
              <a href="https://www.youtube.com/"><img src ={navIcon1 } alt="logo"></img> </a>
              <a href="https://www.youtube.com/"><img src ={navIcon2 } alt= "facebook"></img> </a>
              <a href="https://www.youtube.com/"><img src ={navIcon3} alt= "blehh" ></img></a>
            </div>

            <div className = "hero-btns">

            <Button className ='btns' buttonStyle = 'btn--outline' buttonSize ='btn--large' a href ="#connect" >LET'S CONNECT</Button>
            </div>
          </span>  
            
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}