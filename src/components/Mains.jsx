import React from "react";
import { Layout, theme } from "antd";
import TaskApp from "./TaskApp";
const { Content } = Layout;

const Mains = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        marginTop: 70,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        minHeight: "750px",
      }}
    >
      <TaskApp />
    </Content>
  );
};

export default Mains;
