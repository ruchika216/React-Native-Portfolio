// import styled from "styled-components";
// import book1 from "../../assets/book1.png"; // Replace with your actual asset paths
// import book2 from "../../assets/book2.png";
// import book3 from "../../assets/book3.png";

// // Styled-components for the 3D book animation
// const BookContainer = styled.div`
//   width: 200px;
//   height: 260px;
//   margin: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   perspective: 900px;
// `;

// const BookWrapper = styled.div`
//   width: 200px;
//   height: 260px;
//   position: relative;
//   transform-style: preserve-3d;
//   transform: rotateY(-25deg) translateZ(20px);
//   transition: transform 0.75s ease, box-shadow 0.5s ease;

//   &:hover {
//     transform: rotateY(0deg) translateZ(20px);
//     box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
//   }
// `;

// const FrontCover = styled.img`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   border-radius: 5px;
//   box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
//   backface-visibility: hidden;
// `;
// const Pages = styled.div`
//   background: #fff;
//   height: calc(260px - 12px);
//   width: 50px;
//   position: absolute;
//   top: 6px;
//   left: 0;
//   transform: translateX(calc(200px - 25px - 3px)) rotateY(90deg)
//     translateX(25px);
//   backface-visibility: hidden;
// `;

// const BackCover = styled.div`
//   background: rgb(114, 136, 170);
//   height: 260px;
//   width: 200px;
//   position: absolute;
//   left: 0;
//   transform: translateZ(-50px);
//   border-radius: 5px;
//   box-shadow: -10px 10px 30px rgba(0, 0, 0, 0.4);
//   backface-visibility: hidden;
// `;

// const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 80vh;
//   padding: 10px;
//   background: rgb(240, 240, 243);
//   background-image: radial-gradient(#ffffff33 1px, rgb(4, 4, 4) 1px);
//   background-size: 20px 20px;
// `;

// const SectionTitle = styled.h1`
//   font-size: 2.5rem;
//   color: rgb(209, 209, 215);
//   text-align: center;
//   margin-bottom: 1rem;
// `;

// const SectionDescription = styled.p`
//   font-size: 1.2rem;
//   color: rgb(165, 159, 159);
//   text-align: center;
//   margin-bottom: 2rem;
//   max-width: 800px;
// `;

// // React component for the Book
// const Book = ({ image }) => {
//   return (
//     <BookContainer>
//       <BookWrapper
//         as="a"
//         href="https://smartnurseshub.com/products"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{ textDecoration: "none", display: "block" }}
//       >
//         <FrontCover src={image} alt="Book Cover" />
//         <Pages />
//         <BackCover />
//       </BookWrapper>
//     </BookContainer>
//   );
// };

// // Main App component
// const App = () => {
//   const books = [book1, book2, book3]; // Array of book cover images from assets

//   return (
//     <Main>
//       <SectionTitle>E-Books Written</SectionTitle>
//       <SectionDescription>
//         Creative and educational e-books designed to help readers in various
//         domains.
//       </SectionDescription>
//       <ul
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "10px",
//           listStyleType: "none",
//           "@media (max-width: 768px)": {
//             gridTemplateColumns: "1fr",
//           },
//         }}
//       >
//         {books.map((book, index) => (
//           <li key={index}>
//             <Book image={book} />
//           </li>
//         ))}
//       </ul>
//     </Main>
//   );
// };

// export default App;

import React from "react";

const BookCard = () => {
  return <div>BookCard</div>;
};

export default BookCard;
