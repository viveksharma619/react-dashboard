import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';
import { Bar, Doughnut } from 'react-chartjs-2';

import { withRouter } from 'react-router-dom';
import { columns, data, dataSource, doughnutData, barData } from '../../data';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns,
      data,
      dataSource,
      doughnutData,
      barData,
    };
  }

  render() {
    return (
      <div className="content_container">
        <Row>
          <Col span={24}>
            <div className="home_card">
              <Bar
                data={this.state.barData}
                height={400}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="home_card">
              <Doughnut data={this.state.doughnutData} />
            </div>
          </Col>
          <Col span={12}>
            <div className="home_card">
              <Table
                dataSource={this.state.dataSource}
                columns={this.state.columns}
                pagination={false}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Home);
