import React, { useEffect, useState, useRef, useCallback } from "react";
import { Button, Container, TextField, styled } from "@mui/material";
import p5 from "p5";

const NODE_RADIUS = 20;

const TreeVisualizer = () => {
  const [tree, setTree] = useState(new Tree());
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState(null);
  const [foundNode, setFoundNode] = useState(null);
  const canvasRef = useRef(null);

  const addNode = useCallback(() => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      tree.addNode(value);
      setTree(tree);
      setInputValue("");
      setSearchValue(null);
      setFoundNode(null);
    }
  }, [inputValue, tree]);

  const deleteNode = useCallback(() => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      tree.removeNode(value);
      setTree(tree);
      setInputValue("");
      setSearchValue(null);
      setFoundNode(null);
    }
  }, [inputValue, tree]);

  const searchNode = useCallback(() => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      setSearchValue(value);
      setFoundNode(tree.search(value));
    }
  }, [inputValue, tree]);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(700, 600).parent(canvasRef.current);
      };

      p.draw = () => {
        p.background(255);
        tree.display(p, p.width / 2, 50, 2);

        if (searchValue !== null) {
          p.fill(0);
          p.textSize(16);
          p.noStroke();
          p.textStyle(p.BOLD);
          if (foundNode) {
            p.fill(26, 188, 156);
            p.text(`Node ${searchValue} found !!`, p.width / 2, p.height - 50);
          } else {
            p.fill(255, 0, 0);
            p.text(
              `Node ${searchValue} not found...`,
              p.width / 2,
              p.height - 50
            );
          }
        }
      };
    };

    const canvas = new p5(sketch);
    return () => canvas.remove();
  }, [tree, searchValue, foundNode]);

  return (
    <Container>
      <div ref={canvasRef}></div>
      <InputContainer>
        <TextField
          label="Node Value"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="contained" onClick={addNode}>
          Add Node
        </Button>
        <Button variant="contained" onClick={deleteNode}>
          Delete Node
        </Button>
        <Button variant="contained" onClick={searchNode}>
          Search Node
        </Button>
      </InputContainer>
    </Container>
  );
};

const InputContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  gap: "10px",
});

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(newNode) {
    if (newNode.value < this.value) {
      if (this.left === null) {
        this.left = newNode;
      } else {
        this.left.addNode(newNode);
      }
    } else {
      if (this.right === null) {
        this.right = newNode;
      } else {
        this.right.addNode(newNode);
      }
    }
  }

  removeNode(value, parent) {
    if (value < this.value) {
      if (this.left !== null) {
        return this.left.removeNode(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        return this.right.removeNode(value, this);
      }
    } else {
      if (this.left !== null && this.right !== null) {
        this.value = this.right.minValue();
        this.right.removeNode(this.value, this);
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right;
      }
      return true;
    }
    return false;
  }

  minValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.minValue();
    }
  }

  search(value) {
    if (this.value === value) {
      return this;
    } else if (value < this.value && this.left !== null) {
      return this.left.search(value);
    } else if (value > this.value && this.right !== null) {
      return this.right.search(value);
    }
    return null;
  }

  display(p, x, y, level) {
    p.fill(255);
    p.stroke(0);
    p.ellipse(x, y, NODE_RADIUS * 2, NODE_RADIUS * 2);
    p.fill(0);
    p.noStroke();
    p.textAlign(p.CENTER, p.CENTER);
    p.text(this.value, x, y);

    p.stroke(0);
    if (this.left !== null) {
      p.line(x, y + NODE_RADIUS, x - 150 / level, y + 150 - NODE_RADIUS);
      this.left.display(p, x - 150 / level, y + 150, level + 1);
    }
    if (this.right !== null) {
      p.line(x, y + NODE_RADIUS, x + 150 / level, y + 150 - NODE_RADIUS);
      this.right.display(p, x + 150 / level, y + 150, level + 1);
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.root.addNode(newNode);
    }
  }

  removeNode(value) {
    if (this.root !== null) {
      if (this.root.value === value) {
        const auxRoot = new Node(null);
        auxRoot.left = this.root;
        const result = this.root.removeNode(value, auxRoot);
        this.root = auxRoot.left;
        return result;
      } else {
        return this.root.removeNode(value, null);
      }
    }
    return false;
  }

  search(value) {
    if (this.root !== null) {
      return this.root.search(value);
    }
    return null;
  }

  display(p, x, y, level) {
    if (this.root !== null) {
      this.root.display(p, x, y, level);
    }
  }
}

export default TreeVisualizer;
