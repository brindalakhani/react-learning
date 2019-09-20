/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';
import Popular from '../../components/BattleComponents/Popular';


/* eslint-disable react/prefer-stateless-function */
export class BattleApp extends React.PureComponent {
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
        <Container className="mt-5">
          <Popular />
        </Container>
      </article>
    );
  }
}

export default BattleApp;
