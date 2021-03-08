import React from 'react';
import { Layout, Typography  } from 'antd';
import 'antd/dist/antd.css';
import './Sidebar.scss';
import '../../../App.scss';

// import { useHistory } from 'react-router-dom';

const { Sider } = Layout;
const { Title, Paragraph } = Typography;

const Sidebar = () => {
  return (
    <Sider width="400" className="login-sidebar-main">
      <Title className="title">Dummy Heading</Title>
      <Paragraph className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      </Paragraph>
    </Sider>
  );
}
export default Sidebar;