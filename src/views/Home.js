import React, { Component } from 'react';
import {Layout, List, Avatar, Row, Col, Table } from 'antd';
import {Bar, Doughnut} from 'react-chartjs-2';

import './Home.css';

import { Link } from 'react-router-dom';

const { Sider, Content } = Layout;

const data = [
    {
      title: 'Sales',
    },
    {
      title: 'Marketing',
    },
    {
      title: 'User',
    },
    {
      title: 'Performance',
    },
];

const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Sales per month',
        backgroundColor: 'rgba(255,99,132,0.9)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40, 89, 35, 45, 55, 67]
      }
    ]
  };

const doughnutData = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
};

const dataSource = [{
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  }, {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },
  {
    key: '3',
    name: 'Joe',
    age: 39,
    address: '10 Downing Street'
  },
  {
    key: '4',
    name: 'Sheena',
    age: 29,
    address: '10 Downing Street'
  }
];
  
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }];
   

class Home extends Component{
    render(){
        return(
                <Layout>
                    <Sider width={300}>
                        <List itemLayout="horizontal" dataSource={data}  renderItem={item => (
                            <List.Item>
                                <Link to={`/sale?title=${item.title}`} className="menu_link">{item.title}</Link>
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
                                        data={barData}
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
                                        <Doughnut data={doughnutData}/>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="home_card">
                                        <Table dataSource={dataSource} columns={columns}  pagination={false}/>
                                    </div>
                                </Col>
                            </Row>
                        </div>                
                    </Content>  
                </Layout>
            )
        }
    }

export default Home;