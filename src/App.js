import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Route';

import { connect } from 'react-redux';

import logo from './react-logo.png';
import 'antd/dist/antd.css';
import './App.css';

import { logout } from './action/user.actions';

import { Layout } from 'antd';
const { Header } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Header>
              <Link className="navbar_logo" to="/">
                <img src={logo} alt="React Dashboard" />
                <h4>React Dashboard</h4>
              </Link>
              <ul className="navbar_menu">
                {!this.props.user ? (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                ) : (
                  <li
                    onClick={() => {
                      this.props.logout();
                    }}
                  >
                    Logout
                  </li>
                )}
              </ul>
            </Header>
          </Layout>
          <Layout>
            <Routes auth={this.props.user} />
          </Layout>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = ({ user }) => {
  return {
    user: user.user,
  };
};

const mapActionsToProps = {
  logout,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
