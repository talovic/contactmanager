import React, { Component } from 'react';
import Header from './components/Header';
import { Grid, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              My App
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
