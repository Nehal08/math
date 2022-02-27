import {  Navbar, NavbarBrand } from "reactstrap";
import '../App.css';
//import Logo from "../assets/Logo.jpeg";
//import Logo2 from "../assets/Logo2.jpeg";
//import Logo3 from "../assets/Logo3.jpeg";
import Logo4 from "../assets/Logo4.jpeg";



const Header = () => {

  return (
    <div>
      <Navbar color="dark" dark expand="md" >
        <NavbarBrand href="/" className="font-loader">
          <img src={Logo4} alt="logo" width="150px" height="120px" style={{padding:"0px",margin:"0px", marginRight: '15px'}} />{'Equation Solver'}
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;

