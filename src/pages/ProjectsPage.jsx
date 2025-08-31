import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";
import { Project1 } from "../assets/index";

const projects = [
  {
    id: 1,
    name: "CoinEcho",
    description:
      "Stay informed with real-time cryptocurrency updates, expert opinions, and in-depth analysis. CoinEcho brings the world of crypto to your fingertips.",
    techStack: ["React", "Supabase", "Mantine UI"],
    images: [Project1, Project1],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    name: "Project Two",
    description:
      "An innovative platform providing AI-powered analytics for businesses to optimize their operations efficiently.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    images: [Project1, Project1],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsPage = () => {
  return (
    <PageContainer>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectHeader>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectLinks>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEye /> Check Live Site
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Get Code
                </motion.a>
              </ProjectLinks>
            </ProjectHeader>
            <ProjectImages>
              {project.images.map((image, idx) => (
                <ProjectImage key={idx} src={image} alt={project.name} />
              ))}
            </ProjectImages>
            <ProjectInfo>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech, index) => (
                  <TechBadge
                    key={index}
                    as={motion.div}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </TechBadge>
                ))}
              </TechStack>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PageContainer>
  );
};

export default ProjectsPage;

const PageContainer = styled.div`
  padding: 50px 20px;
  background-color: #c6bdb4;
  color: #fff;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1000px;
  margin: auto;
`;

const ProjectCard = styled.div`
  background: #1a1a1a;
  font-family: "Kurale", serif;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
`;

const ProjectImages = styled.div`
  display: flex;
  gap: 10px;
`;

const ProjectImage = styled.img`
  width: 48%;
  border-radius: 10px;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  a {
    color: #a389ff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.5;
`;

const TechStack = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const TechBadge = styled.div`
  background: #333;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
`;
