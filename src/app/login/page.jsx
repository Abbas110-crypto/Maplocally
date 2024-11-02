'use client';
import React from 'react'
import { Row, Col, Button, Checkbox, Form, Input, Flex } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styles from './login.module.css'

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className={styles.login_section}>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className={styles.login_content}>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <h3 className={styles.login_heading}>Login to your Account</h3>
                <h6 className={styles.login_sub_heading}>Welcome back! Select method to log in:</h6>
              </Col>
            </Row>
            <div>
              <Form
                name="login"
                initialValues={{
                  remember: true,
                }}
                style={{
                  maxWidth: 360,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Email!',
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                  <Flex justify="space-between" align="center">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a href="">Forgot password</a>
                  </Flex>
                </Form.Item>

                <Form.Item>
                  <Button block type="primary" htmlType="submit">
                    Log in
                  </Button>
                  or <a href="">Register now!</a>
                </Form.Item>
              </Form>
            </div>
            <Row>

            </Row>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div>

          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Login;