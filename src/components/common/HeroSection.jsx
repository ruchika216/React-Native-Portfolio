"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "./Card";
import { hero1, hero3 } from "../../assets/index";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Section>
      {/* Cards Section */}
      <AnimatedSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <CardGrid>
          <Card
            type="image"
            image={hero1}
            title="Full-Stack Development"
            description="I bring ideas to life through modern web and mobile applications using React JS, React Native, Angular, and Flutter."
            author={
              <Link to="/projects">
                <ActionButton>See Projects</ActionButton>
              </Link>
            }
            time=""
          />

          <Card
            type="text"
            title="Creative Content & Writing"
            description="From ebooks to social media posts, I turn ideas into compelling content. Let’s connect your brand with the right audience."
            smallText={
              <Link to="/work">
                <ActionButton>Discover My Work</ActionButton>
              </Link>
            }
          />

          <Card
            type="image"
            image={hero3}
            title="YouTube & Beyond"
            description="I’m starting a YouTube channel to share my knowledge, tutorials, and creative projects. Stay tuned for something amazing!"
            author={
              <a
                href="https://www.youtube.com/@TheChikaa-Show"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionButton>Subscribe Soon</ActionButton>
              </a>
            }
            time=""
          />
        </CardGrid>
      </AnimatedSection>

      {/* Full Screen Black Box */}
      <AnimatedSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <FullWidthCardWrapper>
          <FullWidthCard>
            <Title>Hi, I’m Ruchika</Title>
          </FullWidthCard>
        </FullWidthCardWrapper>
      </AnimatedSection>
    </Section>
  );
};

export default HeroSection;

/**
 * Styled Components
 */
const Section = styled.div`
  padding: 0;
  background: linear-gradient(to bottom, #c6bdb4, #c6bdb4);
`;

const FullWidthCardWrapper = styled.div`
  width: 100%;
  height: 20vh; /* Adjusted height */
`;

const FullWidthCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 8vw, 6rem); /* Dynamic font scaling */
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  font-family: "Kurale", serif;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const AnimatedSection = styled(motion.div)``;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: transparent;
    color: rgb(255, 252, 252);
  }
`;
