import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import p5 from "p5";
import { styled, Container } from "@mui/material";

const QueueCanvas = () => {
  const [queue, setQueue] = useState([]);
  const sketchRef = useRef(null);

  const animationQueue = useRef([]);

  const enqueue = (newItem) => {
    setQueue((prevQueue) => [...prevQueue, newItem]);
    const newItemX = 10 + queue.length * 60;
    animationQueue.current.push({
      x: 400,
      y: 100,
      value: newItem,
      targetX: newItemX,
    });
  };

  const dequeue = () => {
    if (queue.length > 0) {
      setQueue((prevQueue) => prevQueue.slice(1));
      queue.forEach((_, index) => {
        const targetX = 10 + index * 60;
        animationQueue.current.push({
          x: 10 + (index + 1) * 60,
          y: 100,
          value: queue[index],
          targetX: targetX,
        });
      });
      animationQueue.current.push({
        x: 10,
        y: 100,
        value: "",
        targetX: -50,
      });
    }
  };

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(400, 200);
        p.frameRate(60);
        p.textAlign(p.CENTER, p.CENTER);
      };

      p.draw = () => {
        p.background(240);

        if (animationQueue.current.length > 0) {
          for (let i = animationQueue.current.length - 1; i >= 0; i--) {
            let item = animationQueue.current[i];
            item.x += (item.targetX - item.x) * 0.1;
            p.fill(100, 100, 250);
            p.rect(item.x, item.y, 50, 30);
            p.fill(255);
            p.text(item.value, item.x + 25, item.y + 15);
            if (Math.abs(item.x - item.targetX) < 1) {
              animationQueue.current.splice(i, 1);
            }
          }
        } else {
          queue.forEach((item, index) => {
            const x = 10 + index * 60;
            p.fill(100, 100, 250);
            p.rect(x, 100, 50, 30);
            p.fill(255);
            p.text(item, x + 25, 125);
          });
        }

        if (queue.length > 0) {
          p.fill(0);
          p.text("Head", 10 + 25, 80);
          p.text("Tail", 10 + (queue.length - 1) * 60 + 25, 140);
        }
      };
    };

    let myp5 = new p5(sketch, sketchRef.current);
    return () => {
      myp5.remove();
    };
  }, [queue]);

  return (
    <VisualizeContainer>
      <div ref={sketchRef} />
      <ButtonContainer>
        <StyledButton
          onClick={() => enqueue(Math.floor(Math.random() * 100) + 1)}
          variant="contained"
          color="primary"
        >
          Enqueue
        </StyledButton>
        <StyledButton onClick={dequeue} variant="contained" color="secondary">
          Dequeue
        </StyledButton>
      </ButtonContainer>
    </VisualizeContainer>
  );
};

//---------------------------------------------------------------------
// Styled Components
//---------------------------------------------------------------------
const VisualizeContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "20px",
});

const ButtonContainer = styled(Container)({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  marginTop: "20px",
});

const StyledButton = styled(Button)({
  margin: "0 10px",
});

export default QueueCanvas;
