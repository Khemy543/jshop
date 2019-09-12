import React, { Component } from 'react';
import '../styles/landingpage.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
     
      <footer>
      <div>
          <h3 style={{fontSize:"18px"}}>contact Info</h3>
          <p>Apollo<br/>Near Dupaul Wood Treatment<br/>P.O.BOX 1001<br/>Takoradi<br/>jessynaggy@gmail.com</p>
       </div>
      <div>
      <h3 style={{fontSize:"18px"}}>HotLines</h3>
      <p>+233 24 262 1192<br/>+233 27 540 4942</p>
      <ul>
        <li><Link to="#"><i className="fa fa-facebook-f fa-2x" aria-hidden="true"></i></Link></li>
        <li><Link to="#"><i className="fa fa-twitter fa-2x"  aria-hidden="true"></i></Link></li>
        <li><Link to="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></Link></li>
      </ul> 
          </div>
      <div>   
      <h3 style={{fontSize:"18px"}}>designed by WEBBEX</h3>
      <p><a href="https://www.instagram.com/webbexgh"style={{color:"white"}}>instagram</a></p>
      </div>
  </footer>
      
    );
  }
}

export default Footer;