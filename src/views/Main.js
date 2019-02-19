import React, { Component } from 'react';
import Sale from './sale/Sale';
import Home from './home/Home';

import { Route, Switch } from 'react-router-dom';

import { data } from '../data';

import {Layout, List} from 'antd';
const { Content, Sider } = Layout;

class Main extends Component{
    render(){
        return(
            <Layout>
                <Sider width={300}>
                    <List itemLayout="horizontal" dataSource={data}  renderItem={item => (
                        <List.Item onClick={()=> { this.props.history.push(`/sale?query=${item.title}`); }}>
                            <div className="menu_link">{item.title}</div>
                        </List.Item>
                    )}
                    />
                </Sider>      
                <Content>
                    <Switch>
                        <Route path="/sale" component={Sale}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </Content>
            </Layout>
        )
    }
}

export default Main;