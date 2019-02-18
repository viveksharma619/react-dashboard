import React, { Component } from 'react';
import {Layout, Table}  from 'antd';
import { dataSource, columns} from '../data';
const { Content } = Layout;


class Sales extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Vivek',
            columns,
            dataSource
        };
    }
    
    render(){
        return (
            <Layout>
                <Content className="content_container">
                <div className="home_card">
                        <Table dataSource={this.state.dataSource} columns={this.state.columns} />
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default Sales;