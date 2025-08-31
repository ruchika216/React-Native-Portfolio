import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // For navigation
import ProjectCard from "../ProjectCard";
import { projects } from "../../constant/index";
const Projects = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const navigate = useNavigate();

  return (
    <StyledSection id="projects">
      <Container>
        <TabsContainer>
          <TabsHeader>
            <Tab
              isActive={activeTab === "tab1"}
              onClick={() => setActiveTab("tab1")}
            >
              Tab 1
            </Tab>
            <Tab
              isActive={activeTab === "tab2"}
              onClick={() => setActiveTab("tab2")}
            >
              Tab 2
            </Tab>
            <Tab
              isActive={activeTab === "tab3"}
              onClick={() => setActiveTab("tab3")}
            >
              Tab 3
            </Tab>
          </TabsHeader>
          <TabsBody>
            {activeTab === "tab1" && (
              <CardRow>
                {projects.map((project, index) => (
                  <ProjectCard key={project.index} {...project} />
                ))}
              </CardRow>
            )}
            {activeTab === "tab2" && (
              <ResponsiveText>
                More Projects will be updated soon
              </ResponsiveText>
            )}
            {activeTab === "tab3" && (
              <ResponsiveText>
                More Projects will be updated soon. Learn more about our work!
              </ResponsiveText>
            )}
          </TabsBody>
        </TabsContainer>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 0;
  background-color: #c6bdb4;
  font-family: "Kurale", serif;
`;

const Container = styled.div`
  width: 93%;
  max-width: 1200px;
  margin: 0 auto;
`;

const TabsContainer = styled.div`
  background: rgb(199, 190, 180); /* New background color */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly blackish shadow */
`;

const TabsHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #e6e6e6;
`;

const Tab = styled.div`
  padding: 15px 20px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  border-bottom: ${(props) =>
    props.isActive ? "3px solid #333" : "3px solid transparent"};
  color: ${(props) => (props.isActive ? "#000" : "#888")};

  &:hover {
    background: #f7f7f7;
  }
`;

const TabsBody = styled.div`
  padding: 20px;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ResponsiveText = styled.p`
  font-size: 18px;
  color: #000;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default Projects;
