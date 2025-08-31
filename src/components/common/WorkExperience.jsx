import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  background: transparent;
  color: #333;
  width: 100%;
  max-width: 1200px; /* Limit width on larger screens */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items horizontally */
  justify-content: center; /* Center align items vertically */
  min-height: 100vh; /* Full height */
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #c6bdb4; /* Text color */
  text-align: center;
  font-weight: bold;
  background-color: #000; /* Black background */
  padding: 1rem 2rem; /* Add padding for button-like appearance */
  border-radius: 10px; /* Rounded corners */
  display: inline-block; /* Make it inline and adjust size */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Add shadow for depth */
  text-transform: uppercase; /* Make text uppercase (optional) */
  transition: all 0.3s ease-in-out; /* Smooth transition for hover effects */

  &:hover {
    background-color: #c6bdb4; /* Invert background on hover */
    color: #000; /* Change text color on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

const ExperienceCard = styled(motion.div)`
  background: rgb(216, 208, 198);
  border: 2px solid #d2c4b6;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: calc(100% - 4rem);
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgb(255, 255, 255, 0.4); /* Lighten background on hover */
    border-color: rgb(233, 196, 106); /* Change border color on hover */
    transform: scale(1.03); /* Slightly enlarge the card */
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Add a deeper shadow */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    padding: 1.5rem;
  }
`;

const Role = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  color: rgb(0, 0, 0);
  font-weight: bold;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #555;
  font-style: italic;
`;

const Duration = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0 1.5rem;
  color: rgb(62, 196, 233);
`;

const Description = styled.ul`
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  padding-left: 1.5rem;
  list-style-type: disc;

  li {
    margin-bottom: 0.8rem;
  }
`;

const WorkExperience = () => {
  const experiences = [
    {
      role: "Programmer Analyst",
      company: "Cognizant Technology Solutions",
      duration: "October 2022 – Present | Noida, India",
      description: [
        "Spearheaded the development of robust web applications using the MERN stack.",
        "Crafted responsive UIs with React and implemented Redux for state management.",
        "Developed scalable RESTful APIs and collaborated with cross-functional teams.",
        "Enhanced user experiences and ensured seamless database operations using Oracle Forms and PL/SQL.",
        "Automated processes with AppWorx, boosting operational efficiency.",
      ],
    },
    {
      role: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions",
      duration: "January 2022 – October 2022 | Noida, India",
      description: [
        "Contributed to the creation of an e-learning platform using React Native.",
        "Focused on delivering intuitive and accessible user interfaces.",
        "Leveraged JIRA for agile project tracking and enhanced Git workflows.",
        "Improved collaboration and task efficiency across teams.",
      ],
    },
    {
      role: "React Native Intern",
      company: "AppyHigh Technology",
      duration: "February 2022 – May 2022 | Gurugram, India",
      description: [
        "Developed an AI-driven mobile application using React Native.",
        "Ensured real-time interactions and a seamless user experience.",
        "Optimized a Flutter-based application by improving UI performance.",
        "Resolved bugs to enhance the application’s reliability.",
      ],
    },
  ];

  return (
    <Container>
      <Title>Work Experience</Title>
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Role>{exp.role}</Role>
          <Company>{exp.company}</Company>
          <Duration>{exp.duration}</Duration>
          <Description>
            {exp.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Description>
        </ExperienceCard>
      ))}
    </Container>
  );
};

export default WorkExperience;
