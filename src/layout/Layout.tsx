import { Layout, Typography } from 'antd';
import React from 'react';
import dreamLogo from '../assets/DreamLogo.png';
import { Routes } from '../constants/routes';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

interface Props {
  children: React.ReactNode;
}
const AppLayout = React.memo((props: Props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center' }}>
          <Title level={1}>
            <a href={Routes.Home}>
              Ocean's Dream
            </a>
          </Title>
          <img src={dreamLogo} className="logo" alt="Dream's Ocean logo" />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <a href={Routes.About}>Ocean's Dream ©2020</a> Created by Elementais
        </Footer>
      </Layout>
    </Layout>
  );
});

export default AppLayout;