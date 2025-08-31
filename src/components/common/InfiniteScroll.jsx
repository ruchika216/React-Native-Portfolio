import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const scrollKeyframes = keyframes`
  to {
    transform: translateX(calc(-50% - 0.5rem));
  }
`;

const ScrollerContainer = styled.div`
  max-width: 600px;
  overflow: hidden;
  ${({ animated }) =>
    animated &&
    `
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  `}
`;

const ScrollerInner = styled.div`
  display: flex;
  padding-block: 1rem;
  gap: 1rem;
  width: max-content;
  flex-wrap: nowrap;
  animation: ${scrollKeyframes} var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;

  ${({ direction }) =>
    direction === "right" &&
    `
    --_animation-direction: reverse;
  `}

  ${({ speed }) => {
    if (speed === "fast") return "--_animation-duration: 20s;";
    if (speed === "slow") return "--_animation-duration: 60s;";
    return "--_animation-duration: 40s;";
  }}
`;

const ListItem = styled.li`
  padding: 1rem;
  background: hsl(215, 25%, 27%);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem -0.25rem hsl(218, 33%, 9%);
  color: white;
  list-style: none;
`;

const ImageItem = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export default function InfiniteScroll({
  items,
  type = "text",
  speed = "medium",
  direction = "left",
}) {
  const scrollerRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scrollerInner = scrollerRef.current;
      if (!scrollerInner) return;

      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <ScrollerContainer animated>
      <ScrollerInner ref={scrollerRef} direction={direction} speed={speed}>
        {items.map((item, index) => {
          if (type === "image") {
            return <ImageItem key={index} src={item} alt={`item-${index}`} />;
          }
          return <ListItem key={index}>{item}</ListItem>;
        })}
      </ScrollerInner>
    </ScrollerContainer>
  );
}
