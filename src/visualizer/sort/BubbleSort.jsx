import React, { useEffect, useRef } from "react";
import p5 from "p5";
import { Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const BubbleSortCanvas = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let values = [];
      let i = 0;
      let j = 0;
      let lerping = false;
      let lerpStart = 0;
      let lerpEnd = 0;
      let lerpAmount = 0;

      p.setup = () => {
        p.createCanvas(400, 300);
        initializeValues();
        p.frameRate(10);
      };

      const initializeValues = () => {
        values = Array.from({ length: 10 }, (_, k) => ({
          value: p.random(p.height),
          position: k,
        }));
        i = 0;
        j = 0;
        lerping = false;
        lerpAmount = 0;
      };

      p.draw = () => {
        p.background(220);
        handleSorting();
        drawBars();
      };

      const handleSorting = () => {
        if (!lerping) {
          if (values[j].value > values[j + 1]?.value) {
            lerpStart = values[j].position;
            lerpEnd = values[j + 1].position;
            [values[j].position, values[j + 1].position] = [
              values[j + 1].position,
              values[j].position,
            ];
            [values[j], values[j + 1]] = [values[j + 1], values[j]];
            lerping = true;
          } else {
            j++;
          }

          if (j >= values.length - i - 1) {
            j = 0;
            i++;
          }

          if (i >= values.length) {
            p.noLoop();
          }
        } else {
          lerpAmount += 0.1;
          if (lerpAmount >= 1) {
            lerpAmount = 0;
            lerping = false;
          }
        }
      };

      const drawBars = () => {
        values.forEach((val, k) => {
          let w = p.width / values.length;
          let posX =
            lerping && (val.position === lerpStart || val.position === lerpEnd)
              ? p.lerp(k * w, val.position * w, lerpAmount)
              : val.position * w;

          p.fill(k === j || k === j + 1 ? 255 : 50);
          p.rect(posX, p.height, w, -val.value);
        });
      };

      // Restart Button Handler
      p.restartSorting = () => {
        p.loop();
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

export default BubbleSortCanvas;
