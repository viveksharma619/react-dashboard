import React, { Component } from 'react';
import {Layout, Table}  from 'antd';
import { dataSource, columns} from '../../data';


class Sales extends Component{
    constructor(props){
        super(props);
        this.state = {
            columns,
            dataSource
        };
    }
    
    render(){
        return (
            <div className="content_container">
                <div className="home_card">
                    <Table dataSource={this.state.dataSource} columns={this.state.columns} />
                </div>
            </div>
        );
    }
}

export default Sales;