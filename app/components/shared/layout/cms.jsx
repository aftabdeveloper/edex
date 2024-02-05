"use client"
import { Layout, Menu, theme
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const items = [

]
const CmsLayout = ({children,app}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme='dark' items={items} />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        {
            children
        }
        <Footer
          style={{
            textAlign: 'center',
          }}
          className='capitalize'
        >
          {app.name} ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default CmsLayout;