import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WebAppPage from './pages/WebAppPage';
import PhotographyPage from './pages/PhotographyPage';
import CvPage from './pages/CvPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Stien Franssens',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Over', path: '/over' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Hello There',
        subtitle: 'Welcome to my online portolio',
      },
   about: {
        title: 'About me',
      },
      contact: {
        title: 'Feel free to talk',
      },
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Stien Franssens</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/over">Over</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} />} />
          <Route path="/over" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          <Route path="/web-applications" render={() => <WebAppPage />} />
          <Route path="/photography" render={() => <PhotographyPage />} />
          <Route path="/cv" render={() => <CvPage />} />

          <Footer />

        </Container>
      </Router>

    );
  }

}

export default App;
