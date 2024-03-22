import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const LinearSearchCanvas = () => {
  const sketchRef = useRef();
  const [myp5, setMyp5] = useState(null); // p5インスタンスを状態として保持

  useEffect(() => {
    const sketch = (p) => {
      let values = [];
      let target;
      let index = 0;
      let state = "searching"; // 'searching', 'found', 'not found'
      let count = 0;

      p.setup = () => {
        p.createCanvas(800, 200);
        initializeSearch();
      };

      const initializeSearch = () => {
        values = [];
        for (let i = 0; i < 30; i++) {
          values.push(p.floor(p.random(100)));
        }
        target = values[p.floor(p.random(values.length))];
        index = 0;
        state = "searching";
      };

      p.draw = () => {
        p.background(255);
        drawValues();

        if (p.frameCount % 10 === 0) {
          if (state === "searching") {
            linearSearchStep();
          }
        }
        if (state === "found") {
          displayFinish();
        }

        displayTarget();
      };

      function drawValues() {
        let boxWidth = p.width / values.length;
        for (let i = 0; i < values.length; i++) {
          p.stroke(0);
          p.fill(180);
          if (i === index) {
            p.fill(state === "found" ? "green" : "red");
          }
          p.rect(i * boxWidth, p.height / 2 - 20, boxWidth - 2, 40);

          p.fill(0);
          p.textSize(16);
          p.textAlign(p.CENTER, p.CENTER);
          p.text(values[i], i * boxWidth + boxWidth / 2, p.height / 2);
        }
      }

      function displayTarget() {
        p.fill(0);
        p.textSize(20);
        p.textAlign(p.CENTER, p.TOP);
        p.text(`Target: ${target}`, p.width / 2, 20);
      }

      const displayFinish = () => {
        p.fill("green");
        p.textSize(20);
        p.textAlign(p.CENTER, p.TOP + 200);
        p.text(`Found with ${count} step`, p.width / 2, 150);
      };

      function linearSearchStep() {
        if (values[index] === target) {
          state = "found";
        } else {
          index++;
          if (index >= values.length) {
            state = "not found";
          }
        }
        count += 1;
      }

      p.restartSearch = () => {
        initializeSearch();
      };
    };

    const newP5 = new p5(sketch, sketchRef.current);
    setMyp5(newP5); // p5インスタンスを状態にセット

    // クリーンアップ関数
    return () => {
      newP5.remove();
    };
  }, []);

  const handleRestart = () => {
    if (myp5 && myp5.restartSearch) {
      myp5.restartSearch(); // リスタート関数を呼び出し
    }
  };

  return (
    <VisualizeContainer>
      <div ref={sketchRef}></div>
      <ButtonContainer>
        <StyledButton
          onClick={handleRestart}
          variant="contained"
          color="primary"
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

export default LinearSearchCanvas;
