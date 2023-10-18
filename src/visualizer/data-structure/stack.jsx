import React, { useEffect, useState, useRef, useCallback } from "react";
import Button from "@mui/material/Button";
import p5 from "p5";
import { styled, Container } from "@mui/material";

const CanvasComponent = () => {
  const [squares, setSquares] = useState([]);
  const myRef = useRef(null);

  const squareSize = 50;
  const spacing = 10;

  // Add squre
  const addSquare = useCallback(() => {
    if ((squares.length + 1) * (squareSize + spacing) <= 400) {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      const newSquare = {
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        })`,
        number: randomNum,
      };
      setSquares((prevSquares) => [...prevSquares, newSquare]);
    }
  }, [squares]);

  // Pop square
  const popSquare = useCallback(() => {
    if (squares.length > 0) {
      setSquares((prevSquares) => prevSquares.slice(0, -1));
    }
  }, [squares]);

  useEffect(() => {
    let sketch = (p) => {
      let generateButton;
      let popButton;
      let squareSize = 50;
      let spacing = 10;

      p.setup = () => {
        p.createCanvas(400, 400);
        p.background(220);

        generateButton = p.createButton("Push");
        generateButton.position(10, 10);
        generateButton.mousePressed(addSquare);

        popButton = p.createButton("Pop");
        popButton.position(140, 10);
        popButton.mousePressed(popSquare);
      };

      p.draw = () => {
        p.background(220);
        for (let i = 0; i < squares.length; i++) {
          const square = squares[i];
          p.fill(square.color);
          p.rect(
            p.width / 2 - squareSize / 2,
            p.height - (i + 1) * (squareSize + spacing),
            squareSize,
            squareSize
          );
          p.fill(0);
          p.textAlign(p.CENTER, p.CENTER);
          p.text(
            square.number,
            p.width / 2,
            p.height - (i + 1) * (squareSize + spacing) + squareSize / 2
          );
        }
      };
    };

    let canvas = new p5(sketch, myRef.current);

    return () => {
      canvas.remove();
    }; // クリーンアップ関数
  }, [squares, addSquare, popSquare]);

  return (
    <VisualizeContainer>
      <div ref={myRef}></div>
      <ButtonContainer>
        <StyledButton onClick={addSquare} variant="contained" color="success">
          Push
        </StyledButton>
        <StyledButton onClick={popSquare} variant="contained">
          Pop
        </StyledButton>
      </ButtonContainer>
    </VisualizeContainer>
  );
};

//---------------------------------------------------------------------
// Helpers
//---------------------------------------------------------------------
const VisualizeContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "300px",
});

const ButtonContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
});

const StyledButton = styled(Button)({
  margin: "10px",
});

export default CanvasComponent;
