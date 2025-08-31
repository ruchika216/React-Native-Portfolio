import React, { useState } from "react";
import styled from "styled-components";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const TabsWithIcon = () => {
  const data = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Profile",
      value: "profile",
      icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Settings",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Container>
      <Heading>
        <h1>Projects</h1>
        <p>Explore our tabs with detailed descriptions and functionality.</p>
      </Heading>
      <TabsContainer>
        <TabsHeader>
          {data.map(({ label, value, icon }) => (
            <Tab
              key={value}
              isActive={activeTab === value}
              onClick={() => setActiveTab(value)}
            >
              <div className="tab-content">
                {React.createElement(icon, { className: "icon" })}
                <span>{label}</span>
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} isActive={activeTab === value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </TabsContainer>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Kurale", serif;
  background-color: rgb(163, 89, 14);
  min-height: 100vh;
  padding: 40px;
  color: #333;
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 36px;
    color: #000;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #555;
  }
`;

const TabsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TabsHeader = styled.div`
  display: flex;
  justify-content: space-around;
  background: #f7f7f7;
  border-bottom: 2px solid #e6e6e6;

  .tab-content {
    display: flex;
    align-items: center;
    gap: 8px;

    .icon {
      width: 20px;
      height: 20px;
    }
  }
`;

const Tab = styled.div`
  padding: 15px 20px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
  border-bottom: ${(props) =>
    props.isActive ? "3px solid #333" : "3px solid transparent"};

  span {
    font-size: 16px;
    font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
    color: ${(props) => (props.isActive ? "#000" : "#888")};
  }

  &:hover {
    background: #e6e6e6;
  }
`;

const TabsBody = styled.div`
  padding: 20px;
`;

const TabPanel = styled.div`
  display: ${(props) => (props.isActive ? "block" : "none")};
  font-size: 16px;
  line-height: 1.6;
  color: #555;
`;

export default TabsWithIcon;
