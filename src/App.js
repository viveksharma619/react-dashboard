import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect
} from 'react-router-dom';
import Routes from './Route';

import {connect} from 'react-redux';

import logo from './react-logo.png';
import 'antd/dist/antd.css'; 
import './App.css';

import {Layout} from 'antd';

const { Header } = Layout;
class App extends Component {
  isAuthenticated(){
    if(!this.props.user){
      return(
        <Redirect to="/login"></Redirect>
      )
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Layout>
            {this.isAuthenticated()}
            <Header>
              <Link className="navbar_logo" to="/">
                <img src={logo} alt="React Dashboard" />
                <h4>React Dashboard</h4>
              </Link>
              <ul className="navbar_menu">
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </Header>
            <Routes/>
          </Layout>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => {
 return {
   user: user.user
 }
}

export default connect(mapStateToProps)(App);
