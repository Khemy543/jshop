import React,{ Component } from 'react';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import '../styles/landingpage.css';


class LandingPage extends Component {
    render() {
      return (
          <div>
              <Header />
              <Body />
              <Footer />

              </div>
      );
    }
}
export default LandingPage;