import React, { useState } from "react";
import { Layout, theme } from "antd";
import Headers from "../components/Headers";
import Sides from "../components/Sides";
import Footers from "../components/Footers";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout name="App with React">
      <Headers collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout className="min-h-[750px]">
        <Sides collapsed={collapsed} />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet /> {/* This will render the nested routes */}
          </Content>
        </Layout>
      </Layout>
      <Footers />
    </Layout>
  );
};

export default Layouts;
