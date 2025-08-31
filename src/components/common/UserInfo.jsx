import styled from "styled-components";
import {
  FaDownload,
  FaArrowRight,
  FaLocationArrow,
  FaTimes,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Bg2, hero1, MyImage, Project1 } from "../../assets";
import { useState } from "react";

const UserInfo = () => {
  const [popupImage, setPopupImage] = useState(null);
  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  const handleSayHiClick = () => {
    window.location.href = "#contact"; // Change this to the contact section or desired link
  };

  return (
    <Container>
      {/* Right Card */}
      <CardRight>
        <ProfileImageContainer>
          <ProfileImage src={MyImage} alt="User" />
        </ProfileImageContainer>
        <Role>
          <Typewriter
            options={{
              strings: ["SOFTWARE DEVELOPER", "BASED IN INDIA"],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
          REACT & REACT NATIVE DEVELOPER
          <br />
          FREELANCER AND CONTENT CREATOR
        </Role>
        <ButtonWrapper>
          <ResumeButton onClick={handleResumeClick}>
            <FaDownload style={{ marginRight: "8px" }} />
            Resume
          </ResumeButton>
          <SayHiButton onClick={handleSayHiClick}>
            Say Hi <FaLocationArrow style={{ marginLeft: "8px" }} />
          </SayHiButton>
        </ButtonWrapper>
      </CardRight>

      {/* Left Card */}
      <CardLeft>
        <Title>INTERACTIVE DEVELOPER!</Title>
        <Description>
          <StyledA>A</StyledA>s a multidisciplinary developer, I specialize in
          crafting seamless digital solutions through cutting-edge web and app
          development. Combining creativity with technical expertise, I build
          responsive and engaging platforms that redefine user experiences. From
          React.js to React Native, I bring visions to life for businesses and
          users worldwide.
        </Description>
        <Certificates>Certificates </Certificates>
        {/* Small Images Section */}
        <ImageGrid>
          <SmallImage
            src={hero1}
            alt="Project 1"
            onClick={() => setPopupImage(hero1)}
          />
          <SmallImage
            src={Project1}
            alt="Project 2"
            onClick={() => setPopupImage(Project1)}
          />
          <SmallImage
            src={hero1}
            alt="Project 3"
            onClick={() => setPopupImage(hero1)}
          />
        </ImageGrid>
      </CardLeft>
      {popupImage && (
        <ImagePopup onClick={() => setPopupImage(null)}>
          <PopupContent>
            <CloseButton onClick={() => setPopupImage(null)}>
              <FaTimes />
            </CloseButton>
            <PopupImage src={popupImage} alt="Popup" />
          </PopupContent>
        </ImagePopup>
      )}
    </Container>
  );
};

export default UserInfo;

/**
 * Styled Components
 */
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  font-family: "Kurale", serif;
  max-width: 100%;
  gap: 2rem;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const CardLeft = styled.div`
  flex: 3;
  background-color: rgb(216, 208, 198);
  font-family: "Kurale", serif;
  border-radius: 8px;
  padding: 1rem 2rem;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  @media (max-width: 1024px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const CardRight = styled.div`
  flex: 2;
  background-color: rgb(216, 208, 198);
  border-radius: 8px;
  font-family: "Kurale", serif;
  padding: 1rem 2rem;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (max-width: 1024px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Title = styled.h1`
  font-family: "Kurale", serif;
  font-weight: bold;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-family: "Kurale", serif;
  font-size: 1.2rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StyledA = styled.span`
  font-family: "Libre Baskerville", serif;
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProfileImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Role = styled.div`
  font-family: "Kurale", serif;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  line-height: 2;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ResumeButton = styled.button`
  background-color: rgb(0, 0, 0);
  color: rgb(246, 244, 239);
  font-family: "Kurale", serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(246, 244, 239);
    color: rgb(0, 0, 0);
  }
`;

const SayHiButton = styled.button`
  background-color: rgb(246, 244, 239);
  color: rgb(0, 0, 0);
  font-family: "Kurale", serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(0, 0, 0);
    color: rgb(246, 244, 239);
  }
`;
const Certificates = styled.h2`
  font-family: "Kurale", serif;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ImageGrid = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const SmallImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
const ImagePopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  z-index: 1000;
`;

const PopupContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PopupImage = styled.img`
  max-width: 40%;
  max-height: 40%;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #ff4d4d;
  }
`;
