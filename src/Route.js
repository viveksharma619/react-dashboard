import React, { Component } from 'react';
import Login from './views/Login';
import AuthRoute from './util/AuthRoute';
import Main from './views/Main';

import { Route, Switch } from 'react-router-dom';

import { Layout } from 'antd';

const { Content } = Layout;

class Routes extends Component{
    render(){
        return(
            <Content>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <AuthRoute auth={this.props.auth} path="/" component={Main}/>
                </Switch>
            </Content>
        )
    }
}

export default Routes;