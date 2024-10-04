import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const Footers = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Task App ©{new Date().getFullYear()} Created by Mele
    </Footer>
  );
};

export default Footers;
