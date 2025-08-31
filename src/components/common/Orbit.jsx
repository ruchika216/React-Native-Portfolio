import styled from "styled-components";
import { motion } from "framer-motion";
import { Orbit } from "../../assets";
import {
  RiReactjsLine,
  RiJavascriptFill,
  RiTailwindCssLine,
} from "react-icons/ri";
import { LiaNode } from "react-icons/lia";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { DiPython } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

export function OrbitingCirclesDemo() {
  return (
    <Container>
      {/* Outer Circle with Static Objects */}
      <OuterCircle
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 10, // Slower movement
          ease: "linear",
        }}
      >
        <StaticObject>
          <FaNodeJs color="purple" size={30} />
        </StaticObject>
        <StaticObject>
          <BsFiletypeSql color="red" size={30} />
        </StaticObject>
        <StaticObject>
          <FaCss3Alt color="black" size={30} />
        </StaticObject>
        <StaticObject>
          <TiHtml5 color="green" size={30} />
        </StaticObject>
        <StaticObject>
          <SiMongodb color="orange" size={30} />
        </StaticObject>
        <StaticObject>
          <DiPython color="blue" size={30} />
        </StaticObject>
        <StaticObject>
          <RiTailwindCssLine color="blue" size={30} />
        </StaticObject>
      </OuterCircle>

      {/* Inner Circle with Moving Objects */}
      <InnerCircle
        animate={{
          rotate: -360,
        }}
        transition={{
          repeat: Infinity,
          duration: 5, // Slower movement
          ease: "linear",
        }}
      >
        <MovingObject>
          <RiJavascriptFill color="red" size={30} />
        </MovingObject>
        <MovingObject>
          <RiReactjsLine color="blue" size={30} />
        </MovingObject>
        <MovingObject>
          <LiaNode color="green" size={30} />
        </MovingObject>
        <MovingObject>
          <FaPython color="gold" size={30} />
        </MovingObject>
      </InnerCircle>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  background-image: url(${Orbit}); /* Use absolute path */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
`;

const OuterCircle = styled(motion.div)`
  position: absolute;
  height: 250px; /* Smaller size */
  width: 250px; /* Smaller size */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StaticObject = styled.div`
  position: absolute;
  transform: rotate(calc(360deg / 7 * var(--index))) translate(120px); /* Adjust translate for smaller size */
  font-size: 1.2rem;

  &:nth-child(1) {
    --index: 0;
  }
  &:nth-child(2) {
    --index: 1;
  }
  &:nth-child(3) {
    --index: 2;
  }
  &:nth-child(4) {
    --index: 3;
  }
  &:nth-child(5) {
    --index: 4;
  }
  &:nth-child(6) {
    --index: 5;
  }
  &:nth-child(7) {
    --index: 6;
  }
`;

const InnerCircle = styled(motion.div)`
  position: absolute;
  height: 120px; /* Smaller size */
  width: 120px; /* Smaller size */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovingObject = styled.div`
  position: absolute;
  transform: rotate(calc(360deg / 4 * var(--index))) translate(60px); /* Adjust translate for smaller size */
  font-size: 1.2rem;

  &:nth-child(1) {
    --index: 0;
  }
  &:nth-child(2) {
    --index: 1;
  }
  &:nth-child(3) {
    --index: 2;
  }
  &:nth-child(4) {
    --index: 3;
  }
`;

export default OrbitingCirclesDemo;
