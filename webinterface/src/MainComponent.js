import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { postFeedback } from './redux/ActionCreators'
import{actions} from "react-redux-form";
import Home from './components/HomeComponent';


const mapStateToProps = state => {
  return {  
 
  }
}
const mapDispatchToProps = dispatch => ({
  postFeedback: (firstname, lastname, email, telnum,agree,contactType,message) => dispatch(postFeedback(firstname, lastname, email, telnum,agree,contactType,message)),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
});
class Main extends Component{

  componentDidMount() {
  }
  render(){
  return (
    <div className="App">
        <Switch>
            <Route path="/home"  component={() => <Home 
            postFeedback={this.props.postFeedback}
            resetFeedbackForm={this.props.resetFeedbackForm}
            />}></Route> 
            <Redirect to="/home"></Redirect>
        </Switch>
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));