import React, { useState, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { projects } from "../constant/index";
import SlidingCard from "../components/Project/SlidingCard";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { style } from "framer-motion/client";

const ProjectInfo = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return (
      <NotFound>
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
      </NotFound>
    );
  }

  const { title, description, imgUrl, githubLink, imgUrl1, imgUrl2, appName } =
    project;
  const thumbnails = [imgUrl, imgUrl1, imgUrl2];
  const [mainImage, setMainImage] = useState(imgUrl);

  const ProjectComponent = lazy(() =>
    import(`../components/Project/Project${projectId}`)
  );

  return (
    <Container>
      <SlidingCardWrapper>
        <SlidingCard />
      </SlidingCardWrapper>
      {/* Title Section */}
      <TitleWrapper>
        <Title>{title.toUpperCase()}</Title>
      </TitleWrapper>
      <Content>
        <Row>
          {/* Right Section - Image */}
          <RightSection>
            <ImageWrapper>
              <MainImage src={mainImage} alt={title} />
              <ThumbnailOverlay>
                {thumbnails.map((thumbnail, index) => (
                  <Thumbnail
                    key={index}
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setMainImage(thumbnail)}
                  />
                ))}
              </ThumbnailOverlay>
            </ImageWrapper>
          </RightSection>

          {/* Left Section - Text */}
          <LeftSection>
            <DescriptionWrapper>
              <AppName>{appName}</AppName>
              <Description>{description}</Description>
            </DescriptionWrapper>

            <SocialLinks>
              {[
                <FaYoutube key="youtube" />,
                <FaInstagram key="instagram" />,
                <FaGithub key="github" />,
                <FaTwitter key="twitter" />,
              ].map((icon, index) => (
                <SocialIcon key={index}>{icon}</SocialIcon>
              ))}
            </SocialLinks>

            <GetInspiredButton>Get Inspired →</GetInspiredButton>
          </LeftSection>
        </Row>
      </Content>

      {/* Dynamic Project Component */}
      <ProjectComponentWrapper>
        <Suspense fallback={<div>Loading Project Details...</div>}>
          <ProjectComponent />
        </Suspense>
      </ProjectComponentWrapper>

      {/* GitHub Link */}
      {githubLink && (
        <GitHubSection>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <GitHubButton>View on GitHub</GitHubButton>
          </a>
        </GitHubSection>
      )}
    </Container>
  );
};

export default ProjectInfo;

// Styled Components
const Container = styled.div`
  font-family: "Kurale", serif;
  background-color: #c6bdb4;
  min-height: 100vh;
  padding: 0 0 2px 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SlidingCardWrapper = styled.div`
  /* margin-bottom: 10px; */
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  /* margin-bottom: 20px; */
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #222;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const AppName = styled.div`
  font-size: 2rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const GetInspiredButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const SocialIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e0e0e0;
  color: #000;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.3rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 150%;
  max-width: 800px;
  height: 100%; /* Matches the left section height */
  aspect-ratio: 4 / 3; /* Ensures consistent aspect ratio */
  border-radius: 20px;
  overflow: hidden;
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); */

  @media (max-width: 768px) {
    max-width: 100%;
    aspect-ratio: 16 / 9; /* Adjust for smaller screens */
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
`;

const ThumbnailOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 5px;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ProjectComponentWrapper = styled.div`
  margin-top: 40px;
`;

const GitHubSection = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const GitHubButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const NotFound = styled.div`
  text-align: center;

  h1 {
    font-size: 2rem;
    color: #000;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

// const textItems = [
//   "HTML",
//   "CSS",
//   "JS",
//   "SSG",
//   "webdev",
//   "animation",
//   "UI/UX",
// ];
// const imageItems = [
//   "https://i.pravatar.cc/150?img=1",
//   "https://i.pravatar.cc/150?img=2",
//   "https://i.pravatar.cc/150?img=3",
//   "https://i.pravatar.cc/150?img=4",
//   "https://i.pravatar.cc/150?img=5",
//   "https://i.pravatar.cc/150?img=6",
// ];

// <OrbitingCirclesDemo />

// <div>
//   <h1 style={{ textAlign: "center" }}>Infinite Scroll Animation</h1>
//   <InfiniteScroll
//     items={textItems}
//     type="text"
//     speed="fast"
//     direction="left"
//   />
//   <InfiniteScroll
//     items={imageItems}
//     type="image"
//     speed="slow"
//     direction="right"
//   />
// </div>

// <div style={{ background: "#f0f0f0", height: "100vh", padding: "20px" }}>
//   <BookCard />
// </div>
// <div>
//   <ResumePage />
// </div>
