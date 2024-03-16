import React, { useEffect, useRef } from "react";
import p5 from "p5";
import { Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const BinarySearchCanvas = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let values = [];
      let target;
      let count = 0;
      let left, right, mid;
      let state = "searching"; // 'searching', 'found', 'not found'

      p.setup = () => {
        p.createCanvas(800, 200);
        initializeSearch();
        p.frameRate(0.75); // Slow down the search steps for visualization
      };

      const initializeSearch = () => {
        values = [];
        count = 0;

        for (let i = 0; i < 30; i++) {
          // Total number of elements
          values.push(p.floor(p.random(100)));
        }
        values.sort((a, b) => a - b); // Sort the array for binary search
        target = values[p.floor(p.random(values.length))]; // Pick a random target from the array
        left = 0;
        right = values.length - 1;
        mid = p.floor((left + right) / 2);
        state = "searching";
      };

      p.draw = () => {
        p.background(255);
        drawValues();
        if (state === "searching") {
          binarySearchStep();
        }

        if (state === "found") {
          displayFinish();
        }
        displayTarget();
      };

      const drawValues = () => {
        let boxWidth = p.width / values.length;
        for (let i = 0; i < values.length; i++) {
          p.stroke(0);
          p.fill(190);
          if (i >= left && i <= right) {
            p.fill(140); // Highlight search range
          }
          if (i === mid) {
            p.fill(state === "found" ? "green" : "red"); // Highlight middle element
          }
          p.rect(i * boxWidth, p.height / 2 - 20, boxWidth - 2, 40);

          p.fill(0);
          p.textSize(16);
          p.textAlign(p.CENTER, p.CENTER);
          p.text(values[i], i * boxWidth + boxWidth / 2, p.height / 2);
        }
      };

      const displayTarget = () => {
        p.fill(0);
        p.textSize(20);
        p.textAlign(p.CENTER, p.TOP);
        p.text(`Target: ${target}`, p.width / 2, 20);
      };

      const displayFinish = () => {
        p.fill("green");
        p.textSize(20);
        p.textAlign(p.CENTER, p.TOP + 200);
        p.text(`Found with ${count} step`, p.width / 2, 150);
      };

      const binarySearchStep = () => {
        if (values[mid] === target) {
          state = "found";
        } else if (left > right) {
          state = "not found";
        } else if (values[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
        mid = p.floor((left + right) / 2);
        count += 1;
      };

      p.restartSearch = () => {
        p.loop();
        initializeSearch();
      };
    };

    let myp5 = new p5(sketch, sketchRef.current);

    // Attach the restartSearch function to the ref
    sketchRef.current.restartSearch = () => myp5.restartSearch();

    // Return cleanup function
    return () => {
      myp5.remove();
    };
  }, []);

  const handleRestart = () => {
    sketchRef.current.restartSearch();
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
  maxWidth: "800px",
});

const ButtonContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
});

const StyledButton = styled(Button)({
  margin: "10px",
});

export default BinarySearchCanvas;
