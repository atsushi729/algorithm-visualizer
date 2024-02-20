import React, { useEffect, useRef } from "react";
import p5 from "p5";
import { Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const MergeSortCanvas = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let values = [];
      let states = [];

      const initializeValues = () => {
        values = Array.from({ length: p.floor(p.width / 8) }, () =>
          p.random(p.height)
        );
        states = new Array(values.length).fill(-1);
        mergeSort(values, 0, values.length - 1);
      };

      p.setup = () => {
        p.createCanvas(400, 300);
        initializeValues();
      };

      p.draw = () => {
        p.background(0);
        drawLines();
      };

      const drawLines = () => {
        for (let i = 0; i < values.length; i++) {
          p.stroke(states[i] === 0 ? "#E0777D" : 255);
          p.line(i * 8, p.height, i * 8, p.height - values[i]);
        }
      };

      const mergeSort = async (arr, start, end) => {
        if (start >= end) return;
        const middle = p.floor((start + end) / 2);
        await mergeSort(arr, start, middle);
        await mergeSort(arr, middle + 1, end);
        await merge(arr, start, middle, end);
      };

      const merge = async (arr, start, middle, end) => {
        let start2 = middle + 1;

        if (arr[middle] <= arr[start2]) {
          return;
        }

        while (start <= middle && start2 <= end) {
          if (arr[start] <= arr[start2]) {
            start++;
          } else {
            let value = arr[start2];
            let index = start2;

            while (index !== start) {
              arr[index] = arr[index - 1];
              index--;
            }
            arr[start] = value;

            start++;
            middle++;
            start2++;
          }
        }
        await sleep(180);
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

export default MergeSortCanvas;
