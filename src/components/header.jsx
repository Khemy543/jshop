import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import logo5 from '../images/logo5.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    
    } from 'reactstrap';  
import {Button} from 'reactstrap';

class Header extends Component {
      
      

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
        
       }

     toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
  render() {
    return (
     
      <div>
          <Navbar color="light" light expand="md" position="static" fixed={`top`}> 
          <NavbarBrand href="/">
              <img alt="" src = {logo5} style={{height:"80px", width:"150px", marginTop:"-15px" , marginBottom:"-10px" }}/>
              {/* <label style={{paddingLeft:"10px", fontSize:"20px", font:"bold"}}>J-Shopping</label> */}
              </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                
              <NavItem>
              <Link to ="/productlist"><Button color="secondary" active>Let's Shop</Button></Link>
                </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      
    );
  }
}

export default Header;