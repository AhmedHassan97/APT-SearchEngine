import React, { Component } from 'react';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import {
    Col, Button, Row, Label, NavLink,
  } from 'reactstrap';
  import {
    Control, Form, Errors,
  } from 'react-redux-form';
import { Link ,Redirect } from 'react-router-dom';

const required = val => val && val.length;

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
   
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
      this.props.postFeedback(values.searchQuery);
    }
render(){
    return(
        <div className="container gettingThingsOrdered">
            <Row>
                <Col>
                    <div>
                        <img alt="Google" height="300" id="hplogo" 
                        src="https://9to5google.com/wp-content/uploads/sites/4/2020/04/popular-google-doodle-games.jpg?quality=82&strip=all"  
                        width="500">
                        </img>
                    </div>
                </Col>
            </Row>
            <div className="row SearchField">
          <div>
            <Form
              model="feedback"
              onSubmit={values => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Control.text
                    onChange={this.handleEmailChange}
                    className="form-control textField"
                    model=".searchQuery"
                    placeholder="searchQuery"
                    id="searchQuery"
                    name="searchQuery"
                    validators={{
                      required
                    }}
                  />
                  <Row className="ml-2">
                    <Errors
                      className="text-danger error"
                      model=".searchQuery"
                      show="touched"
                      messages={{
                        required: "Enter your Search Query "
                      }}
                    />
                  </Row>
                </Col>
              </Row>
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Button model="submit" className="searchButton">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>

          </div>
        </div>
        </div>
        )
      }
}

export default Home;