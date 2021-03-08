import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import './Login.scss';
import Step1 from '../component/Forms/Step1';
import LoginHeader from '../component/Header/LoginHeader';
import Sidebar from '../component/Sidebar/Sidebar';


// import { useHistory } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Link, Text } = Typography;

const Login = () => {
  return (
    <Layout className="login-form-main">
      <Layout>
        <LoginHeader />
        <Content className="login-content-area">
          <Row className="full-width">

            <Col span="12" offset={6}>
              <div className="login-inner-area">
                <Typography>
                  <Title>Lets set up your account</Title>
                  <Text>Already have an account? <Link href="#">Sign in</Link></Text>
                </Typography>

                <Step1 />

                <Typography>
                  <Text>By clicking the "Next" button,You agree to creatong a free account, and to <Link href="#">Terms of service</Link> and <Link href="#">Privacy Policy.</Link></Text>
                </Typography>
              </div>

            </Col>

          </Row>
        </Content>
      </Layout>

      <Sidebar />

    </Layout>
  );
}
export default Login;