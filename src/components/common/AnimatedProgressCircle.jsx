import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CircleWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
  height: 150px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1); /* Scale up the progress bar slightly */
    transition: transform 0.3s ease;
  }
`;

const ProgressSvg = styled.svg`
  position: absolute;
  transform: rotate(-90deg); /* Rotate for progress to start at the top */
  width: 150px;
  height: 150px;
`;

const BackgroundCircle = styled.circle`
  fill: none;
  stroke: rgb(250, 248, 247);
  stroke-width: 10;
`;

const AnimatedCircle = styled(motion.circle)`
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
`;

const PercentageText = styled.div`
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  color: #61dafb;
`;

export const AnimatedProgressCircle = ({ percentage = 70 }) => {
  const circleRadius = 60; // Radius of the circle
  const circumference = 2 * Math.PI * circleRadius; // Circumference of the circle
  const [isHovered, setIsHovered] = useState(false); // State to handle hover

  return (
    <CircleWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProgressSvg>
        {/* Static Background Circle */}
        <BackgroundCircle cx="75" cy="75" r={circleRadius} />
        {/* Animated Circle */}
        <AnimatedCircle
          cx="75"
          cy="75"
          r={circleRadius}
          initial={{ strokeDashoffset: circumference }} // Start with full offset
          animate={{
            strokeDashoffset:
              circumference - (percentage / 100) * circumference, // Calculate progress
            stroke: isHovered ? "#FF5722" : "#61dafb", // Change stroke color on hover
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{
            strokeDasharray: circumference, // Total length of the circle
          }}
        />
      </ProgressSvg>
      {/* Percentage Display */}
      <PercentageText>{percentage}%</PercentageText>
    </CircleWrapper>
  );
};
