import React from "react";
import { Layout, Menu, theme } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const { Sider } = Layout;

const items2 = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Home",
    link: "/", // Add links for navigation
  },
  {
    key: "2",
    icon: <InfoCircleOutlined />,
    label: "About",
    link: "/about",
  },
  {
    key: "3",
    icon: <PhoneOutlined />,
    label: "Contact",
    link: "/contact",
  },
];

const Sides = ({ collapsed }) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    const selectedItem = items2.find((item) => item.key === e.key);
    if (selectedItem) {
      navigate(selectedItem.link); // Navigate to the corresponding link
    }
  };

  return (
    <Sider
      trigger={null}
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      width={200}
      style={{
        background: colorBgContainer,
        marginTop: "65px",
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
        items={items2}
        onClick={handleMenuClick} // Attach the click handler
      />
    </Sider>
  );
};

export default Sides;
