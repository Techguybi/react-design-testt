import React from 'react';
import { Layout, Typography, Form, Input, Button, Select } from 'antd';

// import { useHistory } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Step1 = () => {

  return (
    <Form
      layout="vertical"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="login-form"
    >
      <Form.Item
        label="Your name"
        name="Your name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email address"
        name="Email address"
        rules={[{ required: true, message: 'Please input your email address!' }]}
      >
        <Input.Password />
      </Form.Item>

        <Form.Item label="User Type">
          <Select placeholder="I would describe my user type as">
            <Select.Option value="Admin">Admin</Select.Option>
            <Select.Option value="User">User</Select.Option>
          </Select>
        </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
        <span className="min-character">Minimum 8 characters</span>
      </Form.Item>

      <Form.Item className="submit-btn">
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </Form>
  );
}
export default Step1;