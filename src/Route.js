import React, { Component } from 'react';
import Home from './views/Home';
import Login from './views/Login';
import Sale from './views/Sale';

import {Route} from 'react-router-dom';

class Routes extends Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/sale" component={Sale}/>
            </div>
        )
    }
}

export default Routes;