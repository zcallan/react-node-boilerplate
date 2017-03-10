import './home.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'views/generic';


class Home extends Component {
  render() {
    return (
      <Container className="home">
        <h2>Let's go!</h2>
        <h3>Made by Callan Delbridge</h3>
      </Container>
    );
  }
}

export default Home;
