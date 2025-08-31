import { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { newspaper } from "../assets";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  flex-wrap: wrap; /* Ensure responsiveness for smaller screens */
`;

const Card = styled.div`
  background-color: hsl(0, 0%, 0%);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
`;

const LeftCard = styled(Card)`
  flex: 8; /* Occupies 70% of the row */
  width: 100%;

  @media (max-width: 768px) {
    flex: 1; /* Full width on smaller screens */
  }
`;

const RightCard = styled(Card)`
  flex: 2; /* Occupies 30% of the row */
  padding-top: 10px;

  @media (max-width: 768px) {
    flex: 1; /* Shrinks proportionally on smaller screens */
    width: 100%; /* Full width for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 20px;
    text-align: center; /* Center-align content for smaller screens */
  }
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 16px;
  color: #c6bdb4;
  margin-top: 14px;

  @media (max-width: 480px) {
    font-size: 2rem; /* Adjust heading size for small screens */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #c6bdb4;
  border-radius: 8px;
  background-color: #1e1e1e;
  color: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #c6bdb4;
  border-radius: 8px;
  background-color: #1e1e1e;
  color: white;
  resize: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #c6bdb4;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b0a7a0;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;

  img {
    max-width: 40%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      max-width: 30%;
    }

    @media (max-width: 480px) {
      max-width: 20%;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    svg {
      font-size: 2.5rem;
      transition: transform 0.3s ease, color 0.3s ease;

      &:hover {
        transform: scale(1.2);
        color: #c6bdb4;
      }

      @media (max-width: 480px) {
        font-size: 2rem;
      }
    }

    p {
      margin-top: 8px;
      font-size: 0.9rem;
      color: #b8b8b8;

      @media (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
  }
`;

const Contact = () => {
  const formRef = useRef();
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({});

  const onFormUpdate = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_s6ju5ro", "template_lmu94rp", formRef.current, {
        publicKey: "EMFiZ15orpvWTWDql",
      })
      .then(
        () => {
          setStatus({ success: true, message: "Message sent successfully" });
          setFormDetails({ firstName: "", email: "", message: "" });
        },
        (error) => {
          setStatus({ success: false, message: "Failed to send message" });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <Container>
      <RightCard>
        <Heading>Connect Socially</Heading>
        <ContactDetails>
          <img src={newspaper} alt="newsImg" />
        </ContactDetails>
        <IconWrapper>
          {[
            { icon: <FaInstagram />, name: "Instagram" },
            { icon: <FaLinkedin />, name: "LinkedIn" },
            { icon: <FaTwitter />, name: "Twitter" },
            { icon: <FaGithub />, name: "GitHub" },
          ].map((platform, index) => (
            <div key={index}>
              {platform.icon}
              <p>{platform.name}</p>
            </div>
          ))}
        </IconWrapper>
      </RightCard>
      <LeftCard>
        <Heading>Get In Touch</Heading>
        <Form ref={formRef} onSubmit={sendEmail}>
          <Input
            type="text"
            placeholder="Your Name"
            value={formDetails.firstName}
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={formDetails.email}
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
          <TextArea
            placeholder="Your Message"
            rows="5"
            value={formDetails.message}
            onChange={(e) => onFormUpdate("message", e.target.value)}
          ></TextArea>
          <Button type="submit">Send Message</Button>
        </Form>
        {status.message && (
          <p style={{ color: status.success ? "green" : "red" }}>
            {status.message}
          </p>
        )}
      </LeftCard>
    </Container>
  );
};

export default Contact;
