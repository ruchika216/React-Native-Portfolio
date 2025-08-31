import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopDrawerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      {/* Navbar */}
      <Navbar>
        <Title as={Link} to="/">
          The Portfolio Series
        </Title>
        <MenuButton
          onClick={toggleDrawer}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <HiMenuAlt4 size={35} />
        </MenuButton>
      </Navbar>

      {/* Drawer */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={isOpen ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, #c6bdb4, #ffe7e2)",
          zIndex: 1000,
          overflow: "hidden",
        }}
      >
        {/* Drawer Top Navbar */}
        <DrawerNavbar>
          <DrawerTitle as={Link} to="/" onClick={toggleDrawer}>
            The Portfolio Series
          </DrawerTitle>
        </DrawerNavbar>

        {/* Close Button */}
        <CloseButton onClick={toggleDrawer}>
          <IoClose size={35} />
        </CloseButton>

        {/* Drawer Links */}
        <DrawerContent>
          <DrawerLink to="/" onClick={toggleDrawer}>
            Home
          </DrawerLink>
          <DrawerLink to="/work" onClick={toggleDrawer}>
            Work
          </DrawerLink>
          <DrawerLink to="/projects" onClick={toggleDrawer}>
            Projects
          </DrawerLink>
        </DrawerContent>

        {/* Social Icons */}
        <SocialIcons>
          <SocialIcon
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaInstagram size={30} />
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTwitter size={30} />
          </SocialIcon>
          <SocialIcon
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub size={30} />
          </SocialIcon>
          <SocialIcon
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin size={30} />
          </SocialIcon>
        </SocialIcons>

        {/* Wavy Bottom Effect */}
        <WavyBottom>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#a5938f"
              d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,186.7C840,192,960,160,1080,165.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </WavyBottom>
      </motion.div>
    </Container>
  );
};

export default TopDrawerNavbar;

// Styled Components
const Container = styled.div`
  position: relative;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  margin: 0 0.5rem;
  background: #c6bdb4;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(123, 115, 116);
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-family: "Kurale", serif;
  flex: 1;
  text-align: center;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover {
    color: #8a7967;
    transform: scale(1.05);
    transition: transform 0.3s ease, color 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MenuButton = styled(motion.button)`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;

  &:hover {
    color: #8a7967;
  }
`;

const DrawerNavbar = styled.div`
  background: #a5938f;
  color: white;
  text-align: center;
  padding: 0.9rem;
`;

const DrawerTitle = styled.h1`
  font-family: "Kurale", serif;
  font-size: 1.5rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: #ffe7e2;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 1.9rem;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg) scale(1.1);
  }
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 190px);
`;

const DrawerLink = styled(Link)`
  margin: 1rem 0;
  text-decoration: none;
  color: black;
  font-size: 10vh;
  font-family: "Libre Baskerville", serif;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #8a7967;
    transform: scale(1.1);

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 12rem;
      height: 12rem;
      background-color: rgba(138, 121, 103, 0.2);
      border-radius: 50%;
      z-index: -1;
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
  }
`;

const SocialIcons = styled.div`
  position: absolute;
  bottom: 5rem; /* Move the icons slightly above */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  color: black;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #8a7967;
  }
`;

const WavyBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
