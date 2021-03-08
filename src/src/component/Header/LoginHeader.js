import React from 'react';
import { Layout, Typography  } from 'antd';
import 'antd/dist/antd.css';
import './Header.scss';

// import { useHistory } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;

const LoginHeader = () => {
  return (
      <Header className="login-header-main">
        <Title level={4}>Step 1 of 3</Title>
        <ul className="show-active-step">
          <li className="active"></li>
          <li></li>
          <li></li>
        </ul>
      </Header>
  );
}
export default LoginHeader;