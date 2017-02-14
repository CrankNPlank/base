import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import handleSignup from '../../modules/signup';
import handleOAuthSignup from '../../modules/oauth-signup';

export default class Signup extends React.Component {
  componentDidMount() {
    console.log('Signup.componentDidMount>this: ', this);

    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleFacebookSubmit(event) {
    //alert('Clicked Facebook');
    //handleOAuthSignup(event);
    event.preventDefault();
    handleOAuthSignup();
  }

  handleGoogleSubmit(event) {
    alert('Clicked Google');
  }

  render() {
    return (
      <div className="Signup">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="page-header">Sign Up</h4>
            <form
              ref={ form => (this.signupForm = form) }
              onSubmit={ this.handleSubmit }
            >
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl
                      type="text"
                      ref="firstName"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl
                      type="text"
                      ref="lastName"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <ControlLabel>Email Address</ControlLabel>
                <FormControl
                  type="text"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Sign Up</Button>
            </form>
            <p>Already have an account? <Link to="/login">Log In</Link>.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="page-header">
              Or, Use Facebook Or Google
            </h4>
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 } >
            <Button
              name="ButtonFB"
              ref={ Button => { this.buttonFB = Button } }
              bsStyle="primary"
              onClick={ this.handleFacebookSubmit }
              style={{ marginBottom: '15px' }}
              block
            >
              <FontAwesome
                name="facebook-official"
                style={{ marginRight: '6px' }}
                /*pulse={ true }*/
                /*size="lg"*/
              />
              LOG IN WITH FACEBOOK
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 } >
            <Button
              bsStyle="danger"
              onClick={ this.handleGoogleSubmit }
              block
            >
              <FontAwesome
                name="google"
                style={{ marginRight: '6px' }}
                /*pulse={ true }*/
                /*size="lg"*/
              />
              LOG IN WITH GOOGLE
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
