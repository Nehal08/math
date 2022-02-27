import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from "reactstrap";
import '../App.css';
import Logo from "../assets/Logo.jpeg";
//import Logo2 from "../assets/Logo2.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" >
        <NavbarBrand href="/" className="font-loader">
          <img src={Logo} alt="logo" width="150px" height="120px" style={{padding:"0px",margin:"0px"}} />{'Equation Solver'}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto"  navbar>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

