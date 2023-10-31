import { useEffect, useState, useRef, useCallback } from "react";
import Button from "@mui/material/Button";
import p5 from "p5";
import { styled, Container } from "@mui/material";

const NodeCanvas = () => {
  const [nodes, setNodes] = useState([]);
  const canvasRef = useRef(null);

  const nodeDiameter = 50;
  const nodeDistance = 100;

  const addNode = useCallback(() => {
    const randomValue = Math.floor(Math.random() * 999) + 1;
    const newNode = {
      value: randomValue.toString(),
      x: nodes.length ? nodes[nodes.length - 1].x + nodeDistance : 400 / 2,
      y: nodes.length ? nodes[nodes.length - 1].y : 400 / 2,
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  }, [nodes]);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(800, 400);
      };

      p.draw = () => {
        p.background(220);

        for (let i = 0; i < nodes.length - 1; i++) {
          drawLink(p, nodes[i], nodes[i + 1]);
        }

        for (let node of nodes) {
          drawNode(p, node);
        }
      };

      const drawNode = (p, node) => {
        p.fill(255);
        p.stroke(0);
        p.ellipse(node.x, node.y, nodeDiameter, nodeDiameter);
        p.fill(0);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(node.value, node.x, node.y);
      };

      const drawLink = (p, node1, node2) => {
        p.stroke(0);
        p.line(node1.x, node1.y, node2.x, node2.y);
        // Arrow drawing can be added here if needed
      };
    };

    let canvas = new p5(sketch, canvasRef.current);

    return () => {
      canvas.remove();
    };
  }, [nodes]);

  return (
    <VisualizeContainer>
      <div ref={canvasRef}></div>
      <ButtonContainer>
        <StyledButton onClick={addNode} variant="contained" color="primary">
          Add Random Node
        </StyledButton>
      </ButtonContainer>
    </VisualizeContainer>
  );
};

const VisualizeContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "900px",
  marginTop: "30px",
});

const ButtonContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
});

const StyledButton = styled(Button)({
  margin: "10px",
});

export default NodeCanvas;
