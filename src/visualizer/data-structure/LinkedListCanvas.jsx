import { useEffect, useState, useRef, useCallback } from "react";
import Button from "@mui/material/Button";
import p5 from "p5";
import { styled, Container } from "@mui/material";

const NodeCanvas = () => {
  const [nodes, setNodes] = useState([]);
  const canvasRef = useRef(null);
  const nodeDistance = 150;
  const nodeDiameter = 50;

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

        // Draw links first to ensure nodes are drawn on top
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
        // Displaying as a rectangle instead of ellipse to match your p5 code
        p.rect(node.x - 50, node.y - 25, 100, 50); 

        p.fill(0);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(node.value, node.x - 25, node.y); 
        p.text("next", node.x + 25, node.y);
      };

      const drawLink = (p, node1, node2) => {
        let linkLength = p.dist(node1.x, node1.y, node2.x, node2.y);
        let arrowSize = 30;
        let ratio = (linkLength - arrowSize - nodeDiameter / 2) / linkLength;

        let endX = p.lerp(node1.x, node2.x, ratio);
        let endY = p.lerp(node1.y, node2.y, ratio);

        drawArrow(p, node1.x, node1.y, endX, endY);
      };

      const drawArrow = (p, x1, y1, x2, y2) => {
        p.stroke(0);
        p.line(x1, y1, x2, y2);
        p.push();
        p.translate(x2, y2);
        p.rotate(p.atan2(y2 - y1, x2 - x1));
        let arrowSize = 10;
        p.line(0, 0, -arrowSize, arrowSize / 2);
        p.line(0, 0, -arrowSize, -arrowSize / 2);
        p.pop();
      };

      p.mousePressed = () => {
        for (let node of nodes) {
          if (p.dist(p.mouseX, p.mouseY, node.x, node.y) < nodeDiameter / 2) {
            node.isDragging = true;
            node.offsetX = node.x - p.mouseX;
            node.offsetY = node.y - p.mouseY;
          }
        }
      };

      p.mouseReleased = () => {
        for (let node of nodes) {
          node.isDragging = false;
        }
      };

      p.mouseDragged = () => {
        for (let node of nodes) {
          if (node.isDragging) {
            node.x = p.mouseX + node.offsetX;
            node.y = p.mouseY + node.offsetY;
          }
        }
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
          Insert Random Node
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
