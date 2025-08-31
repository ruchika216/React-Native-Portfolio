import styled from "styled-components";
import { motion } from "framer-motion";
import {
  hero1,
  hero2,
  hero3,
  book3,
  book2,
  book1,
  work1,
  work2,
  worklogo,
  worklogo1,
  worklogo2,
  worklogo3,
  Menu1,
  Menu2,
} from "../assets";

const Container = styled.div`
  font-family: "Kurale", serif;
  background-color: #c6bdb4;
  padding: 4rem 2rem;
  min-height: 100vh;
`;

const Section = styled(motion.div)`
  margin-bottom: 6rem;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  letter-spacing: 1.5px;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  color: #555;
  margin-bottom: 2rem;
`;

const BookSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  background-image: url(${work2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;
  border-radius: 10px;
`;
const BlogSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const BookContainer = styled.div`
  width: 200px;
  height: 260px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 900px;
`;

const BookWrapper = styled.div`
  width: 200px;
  height: 260px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(-30deg);
  transition: transform 0.75s ease;

  &:hover {
    transform: rotateY(0deg);
  }
`;

const FrontCover = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 0 5px 5px 0;
  box-shadow: 5px 5px 20px #2e2e2e;
  backface-visibility: hidden;
`;

const Pages = styled.div`
  background: #fff;
  height: calc(260px - 12px);
  width: 50px;
  position: absolute;
  top: 6px;
  left: 0;
  transform: translateX(calc(200px - 25px - 3px)) rotateY(90deg)
    translateX(25px);
  backface-visibility: hidden;
`;

const BackCover = styled.div`
  background: rgb(11, 53, 135);
  height: 260px;
  width: 200px;
  position: absolute;
  left: 0;
  transform: translateZ(-50px);
  border-radius: 0 5px 5px 0;
  box-shadow: -10px 0 50px 10px #2e2e2e;
  backface-visibility: hidden;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled(motion.div)`
  width: 320px;
  height: 360px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgb(216, 208, 198) 0%, #c6bdb4 100%);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 180px;
    border-radius: 10px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  .tech {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
`;

const LogoCard = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #fff;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: contain;
  }
`;

// const BlogCard = styled(motion.div)`
//   width: 320px;
//   height: 400px; // Adjusted height to fit content
//   border-radius: 15px;
//   background: #fff;
//   box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.05);
//   }

//   img {
//     width: 100%;
//     height: 50%; // Adjusted to fit the layout
//     object-fit: cover;
//   }

//   div {
//     padding: 1rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     height: 50%; // Adjusted to fit the layout
//   }

//   h3 {
//     font-size: 1.5rem;
//     margin: 0.5rem 0;
//   }

//   p {
//     font-size: 1rem;
//     color: #555;
//   }
// `;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const MenuCard = styled(motion.div)`
  position: relative;
  width: 280px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  background: #f8f9fa;
  padding: 2px;
  background: linear-gradient(
    135deg,
    #f8f9fa,
    #e9ecef
  ); /* Subtle gradient background */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15), 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) scale(1.03); /* Slight hover effect */
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.25),
      0px 7px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
const BlogCard = styled(motion.div)`
  width: 320px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  div {
    padding: 1rem;
  }

  .badge {
    background-color: #e9ecef;
    color: #007bff;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.3rem 0.7rem;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #343a40;
  }

  p {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 1rem;
  }

  .author-info {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #6c757d;
  }

  .author-info img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  .author-info span {
    margin-right: 0.5rem;
  }
`;
const BlogScrollView = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem 0;
`;

const sections = [
  {
    title: "Projects",
    description:
      "A showcase of my best projects including web apps, AI models, and innovative features.",
    items: [
      {
        image: hero1,
        title: "Project 1",
        tech: "React, Tailwind CSS, Stripe",
        description:
          "This project involves creating a responsive web app with React. It features a modern design and integrates with Stripe for payment processing.",
        date: "December 17, 2024",
        readTime: "6 min read",
        views: "1,430 views",
      },
      {
        image: hero1,
        title: "Project 2",
        tech: "Node.js, Express, MongoDB",
        description:
          "An AI-powered chatbot for customer support, built with Node.js and Express. It uses MongoDB for data storage and provides real-time responses.",
        date: "November 10, 2024",
        readTime: "5 min read",
        views: "1,200 views",
      },
      {
        image: hero1,
        title: "Project 3",
        tech: "Vue.js, Firebase, PayPal",
        description:
          "A robust e-commerce platform with integrated payment gateway. Built with Vue.js and Firebase, it offers seamless shopping experiences.",
        date: "October 5, 2024",
        readTime: "8 min read",
        views: "1,800 views",
      },
    ],
  },
  {
    title: "E-Books Written",
    description:
      "Creative and educational e-books designed to help readers in various domains.",
    items: [book1, book2, book3],
  },
];

const blogs = [
  {
    image: hero1,
    badge: "TECHNOLOGY",
    title: "Why is the Tesla Cybertruck designed the way it is?",
    description: "An exploration into the truck's polarising design.",
    authorImage: hero2,
    authorName: "Carrie Brewer",
    time: "2 h ago",
  },
  {
    image: hero2,
    badge: "POPULAR",
    title: "How to Keep Going When You Don’t Know What’s Next",
    description:
      "The future can be scary, but there are ways to deal with that fear.",
    authorImage: hero3,
    authorName: "Jerome Walton",
    time: "Yesterday",
  },
  {
    image: hero3,
    badge: "DESIGN",
    title: "10 Rules of Dashboard Design",
    description: "Dashboard Design Guidelines.",
    authorImage: hero1,
    authorName: "Lewis Daniels",
    time: "23 Dec 2019",
  },
];

const Book = ({ image }) => {
  return (
    <BookContainer>
      <BookWrapper>
        <FrontCover src={image} alt="Book Cover" />
        <Pages />
        <BackCover />
      </BookWrapper>
    </BookContainer>
  );
};

// Function to truncate description to 20 words
const truncateDescription = (description) => {
  const words = description.split(" ");
  if (words.length > 20) {
    return words.slice(0, 30).join(" ") + "...";
  }
  return description;
};

const PortfolioPage = () => {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Work Portfolio
      </Title>

      {sections.map((section, index) =>
        section.title === "Projects" ? (
          <Section key={index}>
            <CardRow>
              {section.items.map((item, idx) => (
                <Card key={idx}>
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <div className="tech">{item.tech}</div>
                  <p>{truncateDescription(item.description)}</p>
                </Card>
              ))}
            </CardRow>
          </Section>
        ) : (
          // eslint-disable-next-line react/jsx-key
          <div>
            <Title
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              E-Books Written
            </Title>

            <BookSection key={index}>
              {section.items.map((item, idx) => (
                <Book key={idx} image={item} />
              ))}
            </BookSection>
          </div>
        )
      )}

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Logo Making
        </Title>
        <LogoSection>
          {[worklogo, worklogo1, worklogo2, worklogo3].map((logo, index) => (
            <LogoCard key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </LogoCard>
          ))}
        </LogoSection>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Content Creation
        </Title>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BlogSection>
            {blogs.map((blog, index) => (
              <BlogCard key={index}>
                <img src={blog.image} alt={blog.title} />
                <div>
                  <div className="badge">{blog.badge}</div>
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <div className="author-info">
                    <img src={blog.authorImage} alt={blog.authorName} />
                    <span>{blog.authorName}</span>
                    <span>{blog.time}</span>
                  </div>
                </div>
              </BlogCard>
            ))}
          </BlogSection>
        </Section>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Resturant Menu Design
        </Title>
        <MenuContainer>
          <MenuCard>
            <img src={Menu1} alt="Menu Design 1" />
          </MenuCard>
          <MenuCard>
            <img src={Menu2} alt="Menu Design 2" />
          </MenuCard>
        </MenuContainer>
      </Section>
    </Container>
  );
};

export default PortfolioPage;
