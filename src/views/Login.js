import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Row, Col, Form, Icon, Input, Button, Checkbox, Alert } from 'antd';

import { login, logout } from '../action/user.actions';

import { connect } from 'react-redux';

const {Content} = Layout;

class SimpleLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: false,
            success: false
        }
    }

    showError(){
        if(this.state.error){
            return (
            <Alert
                message="Error Text"
                description="Error Description Error Description Error Description Error Description Error Description Error Description"
                type="error"
                closable
                onClose={()=> { this.setState({ error : false})}}
                />
            )
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            try{
                this.props.login(values.userName);
                this.props.history.push('/');
            }
            catch(e){
                this.setState({ error : true })
            }
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
                            <Col span={8}>
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
                        <Row type="flex" justify="space-around" align="middle">
                            <Col span={8}>
                                {this.showError()}
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        )
    }
}

const Login  = Form.create({ name: 'Login' })(SimpleLogin);

const mapStateToProps = ({ user }) => {
    return {
        user : user.user,
        authorizationKey: user.authorizationKey
    }
}

const mapActionsToProps = {
    login,
    logout
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Login));