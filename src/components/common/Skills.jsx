import styled from "styled-components";
import { AnimatedProgressCircle } from "./AnimatedProgressCircle"; // Importing AnimatedProgressCircle
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaWordpress,
} from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiFigma,
  SiFlutter,
  SiAngular,
} from "react-icons/si";

// Styled Components for Layout and Design
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  flex-wrap: wrap; /* Ensure responsiveness for smaller screens */
`;

const Card = styled.div`
  background-color: hsl(0, 0%, 0%);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
`;

const LeftCard = styled(Card)`
  flex: 7; /* Occupies 70% of the row */
  padding: 20px 40px; /* Adjust padding for better alignment */
`;

const RightCard = styled(Card)`
  flex: 3; /* Occupies 30% of the row */
  padding-top: 10px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 16px;
  color: #c6bdb4;
`;

const SubHeading = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 32px;
  color: #b8b8b8;
  line-height: 1.6;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    font-size: 2.5rem;
    color: white; /* Default white color for icons */
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.2);
      color: #61dafb; /* Hover effect color */
    }
  }

  p {
    margin-top: 8px;
    font-size: 0.8rem;
    color: #b8b8b8; /* Text below icons */
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px; /* Add spacing between subheading and progress circles */
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const SkillHeading = styled.h3`
  margin-top: 12px; /* Adjust spacing between progress circle and heading */
  font-size: 1rem;
  color: white;
`;

// Main Component
const Skills = () => {
  return (
    <Container>
      {/* Right Card: Skills and Icons */}
      <RightCard>
        <Heading>Skills</Heading>
        <IconWrapper>
          {[
            { icon: <FaReact />, name: "React JS" },
            { icon: <SiReact />, name: "React Native" },
            { icon: <FaNodeJs />, name: "Node JS" },
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCss3Alt />, name: "CSS" },
            { icon: <SiJavascript />, name: "JavaScript" },
            { icon: <FaDatabase />, name: "SQL" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiFigma />, name: "Figma" },
            { icon: <SiFlutter />, name: "Flutter" },
            { icon: <SiAngular />, name: "Angular" },
            { icon: <FaWordpress />, name: "WordPress" },
          ].map((skill, index) => (
            <div key={index}>
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </IconWrapper>
      </RightCard>

      {/* Left Card: Progress Circles */}
      <LeftCard>
        <SubHeading>
          Unleashing potential with a perfect blend of technical expertise and
          creativity.
        </SubHeading>
        <SkillsWrapper>
          {[
            { percentage: 95, title: "Web Development" },
            { percentage: 80, title: "Brand Identity" },
            { percentage: 90, title: "Logo Design" },
          ].map((skill, index) => (
            <SkillItem key={index}>
              <AnimatedProgressCircle percentage={skill.percentage} />
              <SkillHeading>{skill.title}</SkillHeading>
            </SkillItem>
          ))}
        </SkillsWrapper>
      </LeftCard>
    </Container>
  );
};

export default Skills;
