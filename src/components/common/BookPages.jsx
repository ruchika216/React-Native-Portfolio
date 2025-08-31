import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import * as pdfjsLib from "pdfjs-dist/webpack";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
  font-family: Arial, sans-serif;
`;

const BookContainer = styled.div`
  position: relative;
  width: 60%;
  height: 80%;
  perspective: 1500px;
`;

const PageContainer = styled(motion.canvas)`
  position: absolute;
  width: 100%;
  height: auto;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #007bff;
    color: white;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
`;

const pdfFile = "/path-to-your-uploaded-file.pdf";

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const fetchPDF = async () => {
      const pdf = await pdfjsLib.getDocument(pdfFile).promise;
      setNumPages(pdf.numPages);

      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = document.getElementById("pdf-canvas");
      const context = canvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: context,
        viewport,
      };

      page.render(renderContext);
    };

    fetchPDF();
  }, [pageNumber]);

  const nextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));
  const prevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));

  return (
    <Container>
      <BookContainer>
        <AnimatePresence>
          <PageContainer
            id="pdf-canvas"
            key={pageNumber}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </BookContainer>
      <Navigation>
        <button onClick={prevPage} disabled={pageNumber === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={pageNumber === numPages}>
          Next
        </button>
      </Navigation>
    </Container>
  );
};

export default App;
