import { useEffect, useRef } from "react";
import styled from "styled-components";
import { projects } from "../../constant/index"; // Import projects data

const SlidingCard = () => {
  const scrollContainerRef = useRef(null);
  const intervalRef = useRef(null);

  // Start auto-scroll
  const startAutoScroll = () => {
    stopAutoScroll(); // Clear any existing interval
    intervalRef.current = setInterval(() => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0; // Reset scroll for infinite effect
      } else {
        scrollContainer.scrollLeft += 1; // Increment scroll position
      }
    }, 20); // Adjust speed here
  };

  // Stop auto-scroll
  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll(); // Start scrolling on mount
    return stopAutoScroll; // Cleanup on unmount
  }, []);

  // Duplicate projects for seamless infinite scrolling
  const loopedProjects = [...projects, ...projects, ...projects];

  return (
    <Container>
      {/* Front side (Image) 
      <Heading>Features</Heading>*/}
      <ScrollWrapper>
        <ScrollContainer ref={scrollContainerRef}>
          {loopedProjects.map((project, index) => (
            <Card
              key={index}
              onMouseEnter={stopAutoScroll} // Stop scrolling on hover
              onMouseLeave={startAutoScroll} // Resume scrolling on leave
            >
              <CardInner>
                {/* Front side (Image) */}
                <CardFront backgroundImage={project.imgUrl} />

                {/* Back side (Text and Description) */}
                <CardBack>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardBack>
              </CardInner>
            </Card>
          ))}
        </ScrollContainer>
      </ScrollWrapper>
    </Container>
  );
};

export default SlidingCard;

// Styled Components
const Container = styled.div`
  background-color: transparent;
  padding: 2rem 1rem;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden; /* Ensure the scroll effect stays inside the container */
`;

const ScrollWrapper = styled.div`
  position: relative;
  overflow: hidden; /* Hide overflowing cards */
  width: 100%;
  padding: 2rem 2rem; /* Add spacing on the left and right */

  @media (max-width: 768px) {
    padding: 0 1rem; /* Reduce spacing for smaller screens */
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 2rem; /* Spacing between cards */
  animation: scroll 15s linear infinite; /* Continuous scrolling effect */

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const Card = styled.div`
  flex: 0 0 300px;
  height: 200px;
  perspective: 1000px; /* Add perspective for 3D effect */
  cursor: pointer; /* Add pointer cursor for interactivity */

  @media (max-width: 768px) {
    flex: 0 0 250px; /* Adjust card size for tablets */
    height: 180px;
  }

  @media (max-width: 480px) {
    flex: 0 0 200px; /* Adjust card size for mobile devices */
    height: 150px;
  }
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Smooth flip animation */

  &:hover {
    transform: rotateY(180deg); /* Flip card on hover */
  }
`;

const CardSide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden; /* Hide the back side when not flipped */
  border-radius: 15px;
`;

// Front side (Image)
const CardFront = styled(CardSide)`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

// Back side (Text and Description)
const CardBack = styled(CardSide)`
  background: white;
  color: black;
  transform: rotateY(180deg); /* Back side is flipped by default */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #333;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
