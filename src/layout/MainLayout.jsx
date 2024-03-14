
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const sideBarData = [
  {
    key: 1,
    icon: <UserOutlined />,
    label: "Phones",
    children: [
      {
        key: 1,
        icon: <UserOutlined />,
        label: <Link to={"/phones"}>Phones</Link>,
      },
    ],
  },
  {
    key: 2,
    icon: <UserOutlined />,
    label: "Notebook",
    children: [
      {
        key: 2,
        label: <Link to={"/notebook"} >Notebook </Link>,
      },
    ],
  },
  {
    key: 3,
    icon: <UserOutlined />,
    label: "Auto",
    children: [
      {
        key: 3,
        label: <Link to={"/auto"}>Auto</Link>,
      },
    ],
  },
];
const items2 = sideBarData.map((item) => {
  return {
    key: item.key,
    icon: item.icon,
    label: item.label,
    children: item.children.map((child) => {
      return {
        key: child.key,
        label: child.label,
      };
    }),
  };
});

export const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
       
          </Breadcrumb>
          <Content 
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {<Outlet />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
