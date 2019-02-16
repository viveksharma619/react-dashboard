import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Row, Col, Form, Icon, Input, Button, Checkbox, } from 'antd';

const {Content} = Layout;

class SimpleLogin extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.history.push('/');
          }
        });
      }
    render(){
        const { getFieldDecorator } = this.props.form;

        return (
            <Layout>
                <Content>
                    <div className="content_container">
                        <Row type="flex" justify="space-around" align="middle">
                            <Col span={8} value={80}>
                                <div className="home_card">
                                    <h3 className="center_heading">Login</h3>
                                    <Form onSubmit={this.handleSubmit} className="login_form">
                                        <Form.Item>
                                        {getFieldDecorator('userName', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                        )}
                                        </Form.Item>
                                        <Form.Item>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                        )}
                                        </Form.Item>
                                        <Form.Item>
                                        {getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        })(
                                            <Checkbox>Remember me</Checkbox>
                                        )}
                                        <a className="login_form-forgot">Forgot password</a>
                                        <Button type="primary" htmlType="submit" className="login_form-button">
                                            Log in
                                        </Button>
                                        Or <a>register now!</a>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        )
    }
}

const Login  = Form.create({ name: 'Login' })(SimpleLogin);

export default withRouter(Login);