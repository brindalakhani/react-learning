/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    return (
      <article>
        <Helmet>
          <title>Battle Application</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Container>
          <h1>Battle</h1>
         
        </Container>
      </article>
    );
  }
}

export default HomePage;
