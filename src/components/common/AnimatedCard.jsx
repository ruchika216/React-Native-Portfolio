import { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background: #f0f0f0;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

const CardWrapper = styled.div`
  width: 250px;
  height: 350px;
  position: relative;
  perspective: 1000px;
  margin: 0 10px;

  &:hover .inner-card {
    transform: rotateY(180deg);
  }
`;

const InnerCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform-style: preserve-3d;
  transform: ${({ isHovered }) =>
    isHovered ? "rotateY(180deg) scale(1.1)" : "rotateY(0deg)"};
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 15px;
  backface-visibility: hidden;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
`;

const CardFront = styled(CardFace)`
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CardBack = styled(CardFace)`
  background: linear-gradient(135deg, #43cea2, #185a9d);
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

const AnimatedCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    { frontText: "Card 1", backText: "This is Card 1 content" },
    { frontText: "Card 2", backText: "This is Card 2 content" },
    { frontText: "Card 3", backText: "This is Card 3 content" },
  ];

  return (
    <CardContainer>
      {cards.map((card, index) => (
        <CardWrapper
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <InnerCard className="inner-card" isHovered={hoveredIndex === index}>
            <CardFront>{card.frontText}</CardFront>
            <CardBack>{card.backText}</CardBack>
          </InnerCard>
        </CardWrapper>
      ))}
    </CardContainer>
  );
};

export default AnimatedCard;
