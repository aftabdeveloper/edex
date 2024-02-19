"use client"
import { 
  Layout,
  Menu,
  theme,
  Breadcrumb
} from 'antd';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
const { Header, Content, Footer, Sider } = Layout;
const items = [

]
const CmsLayout = ({children,app}) => {
  const path = usePathname()
  const pathname = path.split("/").slice(1)
  const getLink = (index)=>{
    const route = pathname.slice(0,index+1)
    return "/"+route.join("/")
  }
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
        <div>
          <Breadcrumb>
              {
                pathname.map((item,index)=>(
                  <Breadcrumb.Item key={index}>
                    {
                      <Link href={getLink(index)}>{item}</Link>
                    }
                  </Breadcrumb.Item>
                ))
              }
          </Breadcrumb>
        </div>
          <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              textAlign: "center"
            }}
          >
            <h1>i am aftab alam</h1>
          {
            children
          }
          </div>
        </Content>
      
        <Footer
          style={{
            textAlign: 'center',
          }}
          className='capitalize'
        >
          {app && app.name} ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default CmsLayout;