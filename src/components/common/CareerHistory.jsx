import { motion } from "framer-motion";
import styled from "styled-components";

const careerData = [
  {
    title: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    location: "Noida, India",
    duration: "January 2022 – October 2022",
    details: [
      "Developed scalable RESTful APIs and collaborated with cross-functional teams.",
      "Enhanced user experiences and ensured seamless database operations using Oracle Forms and PL/SQL.",
      "Automated processes with AppWorx, boosting operational efficiency.",
    ],
  },
  {
    title: "React Native Intern",
    company: "AppyHigh Technology",
    location: "Gurugram, India",
    duration: "February 2022 – May 2022",
    details: [
      "Developed an AI-driven mobile application using React Native.",
      "Ensured real-time interactions and a seamless user experience.",
      "Optimized a Flutter-based application by improving UI performance.",
      "Resolved bugs to enhance the application’s reliability.",
    ],
  },
  {
    title: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    location: "Noida, India",
    duration: "January 2022 – October 2022",
    details: [
      "Contributed to the creation of an e-learning platform using React Native.",
      "Focused on delivering intuitive and accessible user interfaces.",
      "Leveraged JIRA for agile project tracking and enhanced Git workflows.",
      "Improved collaboration and task efficiency across teams.",
    ],
  },
];

const CareerHistory = () => {
  return (
    <Section>
      <Header
        as={motion.h1}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Career History
      </Header>
      <TimelineContainer>
        {careerData.map((item, index) => (
          <TimelineItem
            key={index}
            as={motion.div}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            align={index % 2 === 0 ? "left" : "right"}
          >
            <Connector />
            <Circle />
            <Content>
              <h2>{item.title}</h2>
              <h3>{item.company}</h3>
              <h4>{item.location}</h4>
              <span>{item.duration}</span>
              <ul>
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </Content>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </Section>
  );
};

export default CareerHistory;

export const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  background: #1e1e1e;
  color: #fff;
  font-family: "Kurale", serif;
  border-radius: 15px;
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #ffffff;
`;

export const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #6c63ff;
    transform: translateX(-50%);
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  justify-content: ${({ align }) =>
    align === "left" ? "flex-end" : "flex-start"};
  gap: 20px;

  &:hover > div {
    transform: scale(1.1);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: #6c63ff;
  border: 4px solid #fff;
  border-radius: 50%;
  position: absolute;
  left: calc(50% - 10px);
  z-index: 2;
`;

export const Connector = styled.div`
  width: 4px;
  height: 100%;
  background: #6c63ff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const Content = styled.div`
  background: #292929;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  width: 40%;
  z-index: 2;

  h2 {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.2rem;
    color: #7a6c63;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 1rem;
    color: #aaaaaa;
    margin-bottom: 5px;
  }

  span {
    font-size: 0.9rem;
    color: #bbbbbb;
    display: block;
    margin-bottom: 15px;
  }

  ul {
    list-style: disc;
    margin-left: 20px;
    color: #dddddd;

    li {
      font-size: 0.95rem;
      margin-bottom: 5px;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;
  }
`;
