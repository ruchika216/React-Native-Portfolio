import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for seamless scrolling
const scrollText = keyframes`
  from {
    transform: translateX(10%);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Styled container for scrolling
const ScrollingContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 70px; /* Adjust height as needed */
  display: flex;
  align-items: center;
  background: rgb(0, 0, 0); /* Optional background */
  position: relative;
  color: #c6bdb4;
`;

// Styled content wrapper for seamless scrolling
const ScrollingContent = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${scrollText} 15s linear infinite; /* Adjust duration for speed */
  gap: 2rem; /* Space between items */
`;

const TextBlock = styled.div`
  display: inline-block;
  font-size: 2rem; /* Default size */
  font-family: "Kurale", serif;
  font-weight: bold;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font for tablets */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Smaller font for phones */
  }
`;

export default function VelocityScroll() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scrollerInner = scrollerRef.current;

    if (scrollerInner) {
      const containerWidth = scrollerInner.parentNode.offsetWidth;
      const scrollerContentWidth = scrollerInner.scrollWidth;

      // Duplicate content to fill at least twice the container width
      while (scrollerInner.scrollWidth < containerWidth * 2) {
        Array.from(scrollerInner.children).forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    }
  }, []);

  return (
    <ScrollingContainer>
      <ScrollingContent ref={scrollerRef}>
        <TextBlock>
          Let's create something together{" "}
          <span
            style={{
              backgroundColor: "#c6bdb4",
              color: "black",
              padding: "0.2rem",
              borderRadius: "4px",
            }}
          >
            EMAIL ME.
          </span>
        </TextBlock>
        <TextBlock>
          Collaborate with us to build amazing projects. Thank you for visiting.
        </TextBlock>
      </ScrollingContent>
    </ScrollingContainer>
  );
}
