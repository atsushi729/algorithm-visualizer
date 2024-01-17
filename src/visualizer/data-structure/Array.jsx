import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";

const ArrayCanvas = () => {
  const [myArray, setMyArray] = useState([]);
  const canvasRef = useRef();

  const addBox = () => {
    setMyArray((prevArray) => {
      const newBoxIndex = prevArray.length;
      const newBoxSize = 800 / 8 - 10;
      const newBox = {
        x: newBoxIndex * (800 / 8) + 800 / 8 / 2,
        y: 200 / 2,
        size: newBoxSize,
        number: newBoxIndex + 1,
      };
      return [...prevArray, newBox];
    });
  };

  const removeBox = () => {
    setMyArray((prevArray) => prevArray.slice(0, -1));
  };

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(800, 200);
      };

      p.draw = () => {
        p.background(0);
        myArray.forEach((box) => {
          displayBox(p, box);
          drawSequenceNumber(p, box.x, box.y + box.size / 2 + 20, box.number);
        });
      };

      const displayBox = (p, box) => {
        p.stroke(255);
        p.strokeWeight(2);
        p.noFill();
        p.rectMode(p.CENTER);
        p.rect(box.x, box.y, box.size, box.size);
      };

      const drawSequenceNumber = (p, x, y, number) => {
        p.fill(255);
        p.noStroke();
        p.textSize(16);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(number, x, y);
      };
    };

    let myp5 = new p5(sketch, canvasRef.current);

    return () => {
      myp5.remove();
    };
  }, [myArray]);

  return (
    <div>
      <div ref={canvasRef}></div>
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeBox}>Remove Last Box</button>
    </div>
  );
};

export default ArrayCanvas;
