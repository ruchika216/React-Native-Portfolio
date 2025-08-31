import styled from "styled-components";
import UserInfo from "../components/common/UserInfo";
import Web from "../components/common/Web";
import Projects from "../components/common/Projects";
import Skills from "../components/common/Skills";
import WorkExperience from "../components/common/WorkExperience";
import Contact from "../pages/Contact";
import VelocityScroll from "../components/common/VelocityScroll";
import CardSlider from "../components/common/CardSlider";
import HeroSection from "../components/common/HeroSection";
const Home = () => {
  return (
    <Container>
      <HeroSection />
      {/* User Info Section */}
      <UserInfoWrapper>
        <UserInfo />
      </UserInfoWrapper>

      {/* Project Info Section */}
      <WebWrapper>
        <Web />
      </WebWrapper>
      <ProjectWrapper>
        <Projects />
      </ProjectWrapper>
      <SkillWrapper>
        <Skills />
      </SkillWrapper>
      <ExperienceWrapper>
        <WorkExperience />
      </ExperienceWrapper>
      <ContactWrapper>
        <Contact />
      </ContactWrapper>
      <TestimonialWrapper>
        <CardSlider />
      </TestimonialWrapper>
      <TextScrollWrapper>
        <VelocityScroll />
      </TextScrollWrapper>
    </Container>
  );
};

export default Home;

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1.5rem;
  justify-content: center;
  font-family: "Kurale", serif;
  background-color: #c6bdb4;
  padding: 2rem;

  /* Responsive design to make cards stack on smaller screens */
  flex-wrap: wrap;
`;

const UserInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem; /* Add some spacing */
`;
const WebWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem; /* Add some spacing */
`;

const ProjectWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c6bdb4;
  padding: 20px;
  border: 2px solid rgb(210, 196, 182); /* Border with color */
  border-radius: 16px; /* Rounded corners */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  /* min-height: 100vh; */
`;
const ExperienceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c6bdb4;
  padding: 20px;
  border: 2px solid rgb(210, 196, 182); /* Border with color */
  border-radius: 16px; /* Rounded corners */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  width: 100%; /* Full width */
  min-height: 100vh; /* Full viewport height */
  box-sizing: border-box; /* Ensure padding and border are included in width/height */
`;

const ContactWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
const TextScrollWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
const TestimonialWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
