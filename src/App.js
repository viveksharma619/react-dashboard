import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

import Routes from './Route';

import logo from './react-logo.png';

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './App.css';

import {Layout} from 'antd';

const {Header} = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
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

export default App;
