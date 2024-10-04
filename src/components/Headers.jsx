import React from "react";
import { Layout, Button, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Headers = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log(theme.useToken());
  return (
    <Header
      style={{
        background: colorBgContainer,
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
      className="flex items-center shadow-2xl "
    >
      <div className="demo-logo" />
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <h1
        className="text-center flex-row m-0 text-xl font-bold"
        style={{ marginLeft: "33%" }}
      >
        Task Application using react, and Redux
      </h1>
      {/* <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{
          flex: 1,
          justifyContent: "end",
          minWidth: 0,
        }}
      /> */}
    </Header>
  );
};

export default Headers;
