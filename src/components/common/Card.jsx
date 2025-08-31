"use client";

import styled, { keyframes } from "styled-components";

const Card = ({ type, image, title, description, author, time, smallText }) => {
  return (
    <CardContainer type={type} image={image}>
      {type === "black" ? (
        <BlackContent>
          <BlackTitle>{title}</BlackTitle>
        </BlackContent>
      ) : type === "text" ? (
        <TextContent>
          <TextTitle>{title}</TextTitle>
          <TextDescription>{description}</TextDescription>
          {smallText && (
            <AnimatedFooter>
              <SmallText>{smallText}</SmallText>
              <AnimatedLine />
            </AnimatedFooter>
          )}
        </TextContent>
      ) : (
        <>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardFooter>
              <ActionButton>{author}</ActionButton>
              {time && <Time>{time}</Time>}
            </CardFooter>
          </CardContent>
        </>
      )}
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: ${(props) => (props.type === "text" ? "auto" : "350px")};
  font-family: "Kurale", serif;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.25);
  }
`;

// Card Content
const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 16px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 8px;
  backdrop-filter: blur(4px);
`;

// Card Title
const CardTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;
  color: #fff;
`;

// Card Description
const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #ddd;
  line-height: 1.4;
  margin: 0;
`;

// Card Footer
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Action Button
const ActionButton = styled.button`
  background-color: rgb(247, 247, 248);
  color: rgb(3, 3, 3);
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(0, 0, 0, 0.7);
    color: rgb(255, 255, 255);
  }
`;

// Time
const Time = styled.span`
  font-size: 0.85rem;
  color: #ccc;
`;

// Text Card
const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 350px;
  gap: 4px;
`;

// Text Title
const TextTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

// Text Description
const TextDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin: 2;
  padding: 2px;
`;

// Small Text with Animation
const AnimatedFooter = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
`;

const SmallText = styled.span`
  font-size: 1rem;
  color: #555;
  position: relative;
  z-index: 2;
  margin: 0;
`;

const moveLine = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const AnimatedLine = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 2px;
  width: 100%;
  background: linear-gradient(to right, rgb(7, 7, 8), #ff63a1);
  animation: ${moveLine} 2s infinite linear;
  z-index: 1;
`;

// Black Content
const BlackContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #201f1f;
`;

// Black Title
const BlackTitle = styled.h1`
  font-size: 8rem;
  color: #cdc6be;
  text-transform: uppercase;
`;
