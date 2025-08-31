import styled from "styled-components";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const SOCIAL_MEDIA = [
    {
      icon: <FaInstagram size={25} />,
      link: "https://instagram.com",
    },
    {
      icon: <FaTwitter size={25} />,
      link: "https://twitter.com",
    },
    {
      icon: <FaGithub size={25} />,
      link: "https://github.com",
    },
    {
      icon: <FaLinkedin size={25} />,
      link: "https://linkedin.com",
    },
  ];

  return (
    <>
      <FooterLine />
      <FooterContainer>
        {/* Left Side - Name */}
        <FooterName>Ruchika</FooterName>

        {/* Right Side - Social Media Icons */}
        <SocialIcons>
          {SOCIAL_MEDIA.map((item, index) => (
            <SocialIcon
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </SocialIcon>
          ))}
        </SocialIcons>
      </FooterContainer>
    </>
  );
};

export default Footer;

// Styled Components
const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgb(123, 115, 116);
  border-radius: 50px; /* Adds a rounded look to the line */
`;

const FooterContainer = styled.div`
  background: #c6bdb4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: "Patrick Hand", serif;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: rgb(83, 59, 31);
  }
`;

const FooterName = styled.div`
  font-size: 1.5rem;
  color: black;
`;
