import React, { Component } from 'react';
import {Layout, Table}  from 'antd';

const { Content } = Layout;

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
  }];
  
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
  

class Sales extends Component{
    render(){
        return (
            <Layout>
                <Content className="content_container">
                    <Table dataSource={dataSource} columns={columns} />
                </Content>
            </Layout>
        );
    }
}

export default Sales;