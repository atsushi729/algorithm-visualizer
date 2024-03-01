import React, { useEffect, useRef } from "react";
import p5 from "p5";
import { Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const QuickSortCanvas = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let values = [];
      let w = 10;
      let states = [];

      const initializeValues = () => {
        values = Array.from({ length: p.floor(p.width / w) }, () =>
          p.random(p.height)
        );
        states = new Array(values.length).fill(-1);
        quickSort(values, 0, values.length - 1);
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth / 2, p.windowHeight / 4);
        initializeValues();
      };

      p.draw = () => {
        p.background(51);
        drawRects();
      };

      const drawRects = () => {
        for (let i = 0; i < values.length; i++) {
          p.noStroke();
          if (states[i] === 0) {
            p.fill("#E0777D");
          } else if (states[i] === 1) {
            p.fill("#D6FFB7");
          } else {
            p.fill("#6e7f80");
          }
          p.rect(i * w, p.height - values[i], w, values[i]);
        }
      };

      const quickSort = async (arr, start, end) => {
        if (start >= end) {
          return;
        }
        let index = await partition(arr, start, end);
        states[index] = -1; // Reset state after partitioning

        await Promise.all([
          quickSort(arr, start, index - 1),
          quickSort(arr, index + 1, end),
        ]);
      };

      const partition = async (arr, start, end) => {
        for (let i = start; i < end; i++) {
          states[i] = 1; // State 1 for elements being compared
        }

        let pivotValue = arr[end];
        let pivotIndex = start;
        states[pivotIndex] = 0; // State 0 for current pivot

        for (let i = start; i < end; i++) {
          if (arr[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            states[pivotIndex] = -1; // Reset state of previous pivotIndex
            pivotIndex++;
            states[pivotIndex] = 0; // New pivotIndex
          }
        }
        await swap(arr, pivotIndex, end);

        for (let i = start; i < end; i++) {
          if (i !== pivotIndex) {
            states[i] = -1; // Reset state of elements that were being compared
          }
        }

        return pivotIndex;
      };

      const swap = async (arr, a, b) => {
        await sleep(100); // Delay for visualization
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
      };

      const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
      };

      // Restart Button Handler
      p.restartSorting = () => {
        initializeValues();
      };
    };

    let myp5 = new p5(sketch, sketchRef.current);

    // Attach the restartSorting function to the ref
    sketchRef.current.restartSorting = () => myp5.restartSorting();

    // Return cleanup function
    return () => {
      myp5.remove();
    };
  }, []);

  const handleRestart = () => {
    sketchRef.current.restartSorting();
  };

  return (
    <VisualizeContainer>
      <div ref={sketchRef}></div>
      <ButtonContainer>
        <StyledButton
          onClick={handleRestart}
          variant="contained"
          color="success"
        >
          Restart
        </StyledButton>
      </ButtonContainer>
    </VisualizeContainer>
  );
};

// Styled components
const VisualizeContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "500px",
});

const ButtonContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
});

const StyledButton = styled(Button)({
  margin: "10px",
});

export default QuickSortCanvas;
