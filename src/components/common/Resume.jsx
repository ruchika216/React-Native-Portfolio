import styled from "styled-components";

const ResumePage = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <NameTitle>
          <h1>Ruchika</h1>
          <h2>Software Developer</h2>
        </NameTitle>
        <Contact>
          <p>
            Email:{" "}
            <a href="mailto:ruchika3449@gmail.com">ruchika3449@gmail.com</a>
          </p>
          <p>Phone: 8527573579</p>
          <p>Location: Greater Noida</p>
          <p>
            <a
              href="https://linkedin.com/in/ruchika"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/ruchika"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </Contact>
      </Header>

      {/* About Section */}
      <Section>
        <SectionTitle>About Me</SectionTitle>
        <Text>
          Skilled Software Developer with 2+ years in web application
          development, eager to leverage full-stack capabilities in solving
          complex issues and crafting superior solutions. Proficient in Full
          Stack Development, striving to deploy comprehensive skills in design,
          development, and performance optimization for impactful projects.
        </Text>
      </Section>

      {/* Work Experience Section */}
      <Section>
        <SectionTitle>Work Experience</SectionTitle>
        <JobCard>
          <JobTitle>Programmer Analyst</JobTitle>
          <Company>Cognizant Technology Solutions</Company>
          <Duration>October 2022 – Present | Noida, India</Duration>
          <Description>
            <ul>
              <li>
                Developed robust web applications leveraging the MERN stack
                (MongoDB, Express.js, React, Node.js).
              </li>
              <li>
                Designed responsive UIs using React and Redux for state
                management.
              </li>
              <li>
                Built RESTful APIs optimized for scalability and security.
              </li>
              <li>
                Implemented Oracle Forms for data-driven applications, enhancing
                user interaction.
              </li>
            </ul>
          </Description>
        </JobCard>

        <JobCard>
          <JobTitle>React Native Intern</JobTitle>
          <Company>AppyHigh Technology</Company>
          <Duration>February 2022 – May 2022 | Gurugram, India</Duration>
          <Description>
            <ul>
              <li>
                Developed an AI-driven app using React Native for real-time
                interactions.
              </li>
              <li>
                Optimized Flutter-based applications with improved UI and bug
                fixes.
              </li>
            </ul>
          </Description>
        </JobCard>
      </Section>

      {/* Education Section */}
      <Section>
        <SectionTitle>Education</SectionTitle>
        <EducationCard>
          <Institution>
            Sant Longowal Institute of Engineering and Technology
          </Institution>
          <Degree>B.E. Computer Science Engineering</Degree>
        </EducationCard>
        <EducationCard>
          <Institution>
            Meerabai Institute of Engineering and Technology
          </Institution>
          <Degree>Diploma in Electronics and Communication</Degree>
        </EducationCard>
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionTitle>Skills</SectionTitle>
        <SkillCategory>
          <h4>Frontend</h4>
          <p>
            React.js, React Native, Angular, HTML, CSS, Bootstrap, Tailwind CSS
          </p>
        </SkillCategory>
        <SkillCategory>
          <h4>Backend</h4>
          <p>Node.js, Express.js</p>
        </SkillCategory>
        <SkillCategory>
          <h4>Database</h4>
          <p>MySQL, MongoDB, Oracle SQL</p>
        </SkillCategory>
        <SkillCategory>
          <h4>Other Skills</h4>
          <p>Git, Firebase, WordPress, Figma</p>
        </SkillCategory>
      </Section>

      {/* Contact Section */}
      <Section>
        <SectionTitle>Contact</SectionTitle>
        <Text>
          <p>
            Email:{" "}
            <a href="mailto:ruchika3449@gmail.com">ruchika3449@gmail.com</a>
          </p>
          <p>Phone: 8527573579</p>
          <p>
            <a
              href="https://linkedin.com/in/ruchika"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/ruchika"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </Text>
      </Section>
    </Container>
  );
};

export default ResumePage;

// Styled Components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Arial", sans-serif;
  color: #333;
  line-height: 1.6;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const NameTitle = styled.div`
  flex: 1;
  text-align: left;

  h1 {
    font-size: 2.5rem;
    color: #007bff;
    margin: 0;
  }

  h2 {
    font-size: 1.2rem;
    color: #555;
    margin: 0.5rem 0;
  }
`;

const Contact = styled.div`
  flex: 1;
  text-align: right;

  p {
    margin: 0.3rem 0;
    font-size: 0.9rem;
    color: #333;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #555;
`;

const JobCard = styled.div`
  margin-bottom: 1.5rem;
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const Company = styled.h4`
  font-size: 1rem;
  color: #555;
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  ul {
    list-style: disc;
    padding-left: 1.5rem;
  }
  li {
    font-size: 0.9rem;
    color: #444;
  }
`;

const EducationCard = styled.div`
  margin-bottom: 1rem;
`;

const Institution = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const Degree = styled.p`
  font-size: 1rem;
  color: #555;
`;

const SkillCategory = styled.div`
  margin-bottom: 1rem;

  h4 {
    font-size: 1.2rem;
    color: #007bff;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;
