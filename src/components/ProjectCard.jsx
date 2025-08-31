import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaEye } from "react-icons/fa";

const ProjectCard = ({
  id,
  title,
  description,
  imgUrl,
  imgUrl1,
  imgUrl2,
  githubLink,
  liveUrl,
  appName,
  techStack = [],
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [mainImage, setMainImage] = useState(imgUrl);

  const thumbnails = [imgUrl, imgUrl1, imgUrl2];

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* Card */}
      <StyledCol onClick={openModal}>
        <ImageBox>
          <img src={imgUrl} alt={title} />
          <Overlay>
            <h4>{title}</h4>

            <GithubButton
              href={githubLink}
              target="_blank"
              onClick={(e) => e.stopPropagation()} // Prevent modal opening
            >
              View on GitHub
            </GithubButton>
          </Overlay>
        </ImageBox>
      </StyledCol>

      {/* Modal */}
      {isModalOpen && (
        <ModalOverlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()} // Prevent modal closing on content click
            as={motion.div}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <ModalHeader>
              <TitleWrapper>
                <h2>{title}</h2>
                <ModalLinks>
                  {liveUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <FaEye />
                      Live Site
                    </a>
                  )}
                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      Get Code
                    </a>
                  )}
                </ModalLinks>
              </TitleWrapper>
              <AppName>{appName}</AppName>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>

            {/* Description */}
            <Description>{description}</Description>

            {/* Tech Stack */}
            <TechStack>
              {techStack.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
              ))}
            </TechStack>

            {/* Image Section */}
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
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

// Styled Components
const StyledCol = styled.div`
  flex: 1 1 30%;
  max-width: 30%;
  margin-bottom: 24px;
  cursor: pointer;

  @media (max-width: 992px) {
    flex: 1 1 45%;
    max-width: 45%;
  }

  @media (max-width: 768px) {
    flex: 1 1 50%;
    max-width: 50%;
  }

  @media (max-width: 576px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const ImageBox = styled.div`
  position: relative;
  border: 2px solid #fff;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  &:hover img {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(255, 0, 0, 0.4) 50%,
    rgba(143, 136, 136, 0.4) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;

  h4 {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    margin-bottom: 10px;
  }

  span {
    font-size: 14px;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    text-align: center;
  }

  &:hover {
    opacity: 1;
  }
`;

const GithubButton = styled.a`
  background: #fff;
  color: #000;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  transition: background 0.3s ease;

  &:hover {
    background: #ddd;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: rgb(240, 235, 230);
  color: #333;
  font-family: "Kurale", serif;
  border-radius: 20px;
  padding: 20px;
  max-width: 900px;
  width: 90%;
  max-height: 90vh; /* Constrain the modal height to 90% of the viewport */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 576px) {
    padding: 10px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    h2 {
      margin-bottom: 10px;
    }
  }
`;

const AppName = styled.p`
  font-size: 0.9rem;
  color: #a31d1d;
  margin: 1px 0;
`;

const ModalLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #333;
    font-size: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CloseButton = styled.button`
  background: rgba(0, 0, 0);
  border: 1px solid #a31d1d;
  border-radius: 15px;
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 15px;

  &:hover {
    background: rgb(180, 19, 19);
    border: 1px solid #a31d1d;
    border-radius: 15px;
    color: rgb(255, 255, 255);
  }
`;

const Description = styled.p`
  background: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.5;
  color: #444;
  margin: 20px 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  margin: 20px 0;

  @media (max-width: 768px) {
    gap: 8px; /* Reduce gap between items */
    margin: 15px 0;
  }

  @media (max-width: 576px) {
    gap: 5px; /* Smaller gap for very small screens */
    margin: 10px 0;
  }
`;

const TechItem = styled.div`
  background: rgb(221, 210, 198);
  border: 1px solid #ddd;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Slight zoom on hover */
  }

  @media (max-width: 768px) {
    padding: 8px 12px; /* Reduce padding for smaller screens */
    font-size: 0.8rem;
  }

  @media (max-width: 576px) {
    padding: 6px 10px; /* Further reduce padding for very small screens */
    font-size: 0.7rem;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Default layout: thumbnails below main image */
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 700px; /* Constrain the max width */
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row; /* Thumbnails beside main image on larger screens */
    align-items: flex-start;
    justify-content: center;
  }
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 500px; /* Constrain the max width for the main image */
  height: auto; /* Maintain aspect ratio */
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  object-fit: contain; /* Ensure the image is scaled properly */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Slight zoom on hover */
  }

  @media (max-width: 768px) {
    max-width: 90%; /* Reduce size on medium screens */
  }

  @media (max-width: 576px) {
    max-width: 100%; /* Full width on small screens */
  }
`;

const ThumbnailOverlay = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8); /* Slight background for clarity */
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    flex-direction: column; /* Stack thumbnails vertically on larger screens */
    padding: 0;
    background: none;
    box-shadow: none;
  }
`;

const Thumbnail = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px; /* Rounded thumbnails */
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    border: 2px solid #c6bdb4;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px; /* Smaller thumbnails on medium screens */
  }

  @media (max-width: 576px) {
    width: 50px;
    height: 50px; /* Smaller thumbnails on small screens */
  }
`;

export default ProjectCard;
