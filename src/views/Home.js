import React, { Component } from 'react';
import {Layout, List, Row, Col, Table } from 'antd';
import {Bar, Doughnut} from 'react-chartjs-2';

import { withRouter } from 'react-router-dom';
import { columns, data, dataSource ,doughnutData, barData } from '../data';

import './Home.css';

const { Sider, Content } = Layout;

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            columns,
            data,
            dataSource,
            doughnutData,
            barData
        };
    }

    render(){
        return(
                <Layout>
                    <Sider width={300}>
                        <List itemLayout="horizontal" dataSource={this.state.data}  renderItem={item => (
                            <List.Item onClick={()=> { this.props.history.push(`/sale?query=${item.title}`); }}>
                                <div className="menu_link">{item.title}</div>
                            </List.Item>
                        )}
                        />
                    </Sider>
                    <Content>
                        <div className="content_container">
                            <Row>
                                <Col span={24} >
                                    <div className="home_card">
                                        <Bar 
                                        data={this.state.barData}
                                        height={400}
                                        options={{
                                            maintainAspectRatio: false
                                        }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row gutter={8}>
                                <Col span={12}>
                                    <div className="home_card">
                                        <Doughnut data={this.state.doughnutData}/>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="home_card">
                                        <Table dataSource={this.state.dataSource} columns={this.state.columns}  pagination={false}/>
                                    </div>
                                </Col>
                            </Row>
                        </div>                
                    </Content>  
                </Layout>
            )
        }
    }

export default withRouter(Home);