import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Vikshak P",
    position: "Cofounder and Head of Operations",
    company: "Edvolve",
    image: "https://source.unsplash.com/100x100/?man,face",
    testimonial:
      "Abhishek worked with us and he was quite the problem solver. His ability to learn quickly and eagerness to learn new things was super helpful since we were a high velocity team and expected quick results. Would happily work with him again to develop good products, and recommend him to other employers looking for a fast learner in your team!",
  },
  {
    id: 2,
    name: "Shwetank Singh",
    position: "Technical Lead",
    company: "Edvolve",
    image: "https://source.unsplash.com/100x100/?man,tech",
    testimonial:
      "Abhishek is a hardworking, driven and dedicated person. He will be an asset wherever he goes.",
  },
  {
    id: 3,
    name: "Nikita Sharma",
    position: "Senior Developer",
    company: "Tech Innovate",
    image: "https://source.unsplash.com/100x100/?woman,tech",
    testimonial:
      "Abhishek's ability to quickly grasp complex concepts and implement them efficiently was impressive. He is an excellent team player and a problem solver.",
  },
  {
    id: 4,
    name: "Rahul Verma",
    position: "Project Manager",
    company: "NextGen Solutions",
    image: "https://source.unsplash.com/100x100/?man,developer",
    testimonial:
      "Working with Abhishek was a great experience. His dedication and attention to detail significantly contributed to our project's success.",
  },
];

const TestimonialPage = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  return (
    <PageContainer>
      <Title
        as={motion.h1}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Few Nice Words
      </Title>
      <TestimonialsGrid>
        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Quote>“</Quote>
            <TestimonialText>{testimonial.testimonial}</TestimonialText>
            <UserInfo>
              <UserImage src={testimonial.image} alt={testimonial.name} />
              <div>
                <UserName>{testimonial.name}</UserName>
                <UserPosition>
                  {testimonial.position} <br /> {testimonial.company}
                </UserPosition>
              </div>
            </UserInfo>

            <QuoteBottom>”</QuoteBottom>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
      <ButtonContainer>
        {visibleCount < testimonials.length && (
          <ShowButton
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            onClick={() => setVisibleCount((prev) => prev + 2)}
          >
            Show More
          </ShowButton>
        )}
        {visibleCount > 2 && (
          <ShowButton
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            onClick={() => setVisibleCount(2)}
          >
            Show Less
          </ShowButton>
        )}
      </ButtonContainer>
    </PageContainer>
  );
};

export default TestimonialPage;

const PageContainer = styled.div`
  padding: 50px 20px;
  font-family: "Kurale", serif;
  background-color: #c6bdb4;
  color: #333;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const TestimonialCard = styled.div`
  background-color: rgb(216, 208, 198);
  border-radius: 12px;
  padding: 30px;
  text-align: left;
  max-width: 500px;
  box-shadow: 0px 4px 10px rgba(194, 19, 19, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.div`
  font-size: 3rem;
  color: rgb(5, 5, 6);
  position: absolute;
  top: 10px;
  left: 20px;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  margin-top: 15px;
  text-align: center;
  font-style: italic;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solidrgb(0, 0, 0);
`;

const UserName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const UserPosition = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const QuoteBottom = styled.div`
  font-size: 3rem;
  color: rgb(8, 7, 8);
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const ShowButton = styled.button`
  background: rgb(0, 0, 0);
  color: #fff;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: rgb(0, 0, 0);
  }
`;
