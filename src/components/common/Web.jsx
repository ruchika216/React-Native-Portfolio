import styled from "styled-components";
import { PaperProfile } from "../../assets";

const Web = () => {
  return (
    <Container>
      {/* First Card */}
      <CardLeft>
        <WebsiteTitle>PROJECTS</WebsiteTitle>
      </CardLeft>

      {/* Second Card */}
      <CardRight>
        <ImageContainer>
          <Image src={PaperProfile} alt="Stamp" />
        </ImageContainer>
      </CardRight>
    </Container>
  );
};

export default Web;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  /* Apply global padding here */

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const CardLeft = styled.div`
  flex: 5;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 1rem;
  height: 150px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0.5rem;
  }

  @media (min-width: 759px) and (max-width: 1025px) {
    width: 100%;
    height: auto;
    padding: 0.5rem;
  }
`;

const WebsiteTitle = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-size: 6rem;
  color: #c6bdb4;
  text-align: center;
  letter-spacing: 2px;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CardRight = styled.div`
  flex: 2;
  background-color: #efefef;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Clip overflow to prevent issues */
  position: relative; /* Allow absolute positioning for the image if needed */
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  position: absolute;
`;
