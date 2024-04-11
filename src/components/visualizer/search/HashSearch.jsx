import React, { useEffect, useRef } from "react";
import p5 from "p5";

const HashTableVisualizer = () => {
  const sketchRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    // p5.js sketch
    const sketch = (p) => {
      let hashTable = [];
      let hashTableSize = 10;

      p.setup = () => {
        p.createCanvas(900, 300);
        p.background(0);
        drawHashTable();
      };

      function hashFunction(key) {
        return key % hashTableSize;
      }

      function insertKey(key) {
        let index = hashFunction(key);
        if (!hashTable[index]) {
          hashTable[index] = [];
        }
        hashTable[index].push(key);
        drawHashTable();
        highlightIndex(index);
      }

      function drawHashTable() {
        p.background(0); // Clear background
        let startX = 150;
        let startY = 100;
        let boxSize = 50;

        // Draw the hash table array
        for (let i = 0; i < hashTableSize; i++) {
          let x = startX + (boxSize + 10) * i;
          p.stroke(255);
          p.fill(255);
          p.rect(x, startY, boxSize, boxSize);
          if (hashTable[i]) {
            p.fill(0);
            p.text(hashTable[i].join(", "), x + 5, startY + boxSize / 2);
          }
        }
      }

      function highlightIndex(index) {
        let startX = 150;
        let startY = 100;
        let boxSize = 50;
        let x = startX + (boxSize + 10) * index;

        p.noFill();
        p.stroke(255, 204, 0);
        p.strokeWeight(3);
        p.rect(x, startY, boxSize, boxSize);
      }

      // Expose the insertKey function to be callable from React
      p.insertKey = insertKey;
    };

    // Create the p5 instance
    let myp5 = new p5(sketch, sketchRef.current);

    // Attach insertKey to the ref after creating the instance
    sketchRef.current.insertKey = myp5.insertKey;

    // Cleanup function
    return () => {
      myp5.remove();
    };
  }, []);

  // Handler to insert key into hash table
  const handleInsert = () => {
    const key = parseInt(inputRef.current.value);
    if (!isNaN(key)) {
      sketchRef.current.insertKey(key);
      inputRef.current.value = ""; // Clear the input field
    }
  };

  return (
    <div>
      <div ref={sketchRef}></div>
      <input ref={inputRef} type="number" placeholder="Enter a key to insert" />
      <button onClick={handleInsert}>Insert Key</button>
    </div>
  );
};

export default HashTableVisualizer;
