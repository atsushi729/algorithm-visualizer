import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import QueueCanvas from "../../visualizer/data-structure/QueueCanvas";
const Array = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutArray = () => {
    return (
      <div id="array" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Array</h1>
          <p className="text-lg mb-4 text-left">
            In computer science, an array is a data structure consisting of a
            collection of elements, each identified by at least one array index
            or key. An array is stored such that the position of each element
            can be computed from its index tuple by a mathematical formula. The
            simplest type of data structure is a linear array, also called
            one-dimensional array.
          </p>
          <p className="text-base inline">
            The primary characteristics of an array are:
          </p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Homogeneity </strong> : All elements in an array are of
              the same data type.
            </li>
            <li>
              <strong>Fixed Size</strong> : The size of an array is defined when
              it is created and cannot be changed (although dynamic array
              structures can overcome this limitation).
            </li>
            <li>
              <strong>Random Access</strong> : Elements can be accessed directly
              by their index in constant time.
            </li>
          </ul>
          <img
            src="/images/linked-list/linked-list.png"
            alt="About Algorithm"
            className="mb-5 shadow-lg rounded-lg border"
          />
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Real-world examples of queue in action:
          </h5>
          <ul className="marker:text-blue-600 list-decimal ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">Gaming</p>
              <p>
                Games use arrays to manage assets like on-screen characters,
                inventory items, or high scores. Each position in the array can
                hold data about an individual character or item.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Database Management:</p>
              <p>
                Databases often return query results in the form of arrays (or
                array-like structures), with each element being a record or row
                from the database.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Social Media Feeds:</p>
              <p>
                Social media platforms may use arrays to store feeds of posts or
                comments. When a user scrolls through their feed, the software
                fetches the next set of posts from an array.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const AboutOperation = () => {
    return (
      <div id="operation" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 font-bold">Operation</h1>
          <p className="text-lg mb-4">
            The main operations in a stack are commonly referred to as "push"
            and "pop." These operations define how elements are added to and
            removed from a stack:
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Operation of Data structure:
          </h5>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <a
                href="/data-structure/stack"
                className="no-underline hover:underline hover:text-blue-500 font-bold"
              >
                Enqueue (Insert):
              </a>
              <p>
                The enqueue operation is used to add an element to the back or
                rear of the queue. This operation increases the size of the
                queue by one. Elements are added to the rear of the queue, and
                it's often referred to as "enqueue" because new elements are
                enqueued or inserted.
              </p>
            </li>
            <li>
              <a
                href="/data-structure/stack"
                className="no-underline hover:underline hover:text-blue-500 font-bold"
              >
                Dequeue (Delete):
              </a>
              <p>
                The dequeue operation is used to remove an element from the
                front or head of the queue. This operation decreases the size of
                the queue by one. Elements are removed from the front of the
                queue, and it's often referred to as "dequeue" because elements
                are dequeued or removed.
              </p>
            </li>
          </ul>
          <img
            src="/images/queue/queue.png"
            alt="About Queue"
            className="mb-5 shadow-lg rounded-lg border"
          />
          <p>Here is a simple example:</p>
          <SyntaxHighlight codeString={stackCode} language="javascript" />
        </div>
      </div>
    );
  };

  const PlayGround = () => {
    return (
      <div id="playground" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Playground</h1>
          <QueueCanvas />
        </div>
      </div>
    );
  };

  //---------------------------------------------------------------------
  // Main component
  //---------------------------------------------------------------------
  return (
    <div className="container mx-auto p-8 flex">
      <div className="flex-grow" style={{ flex: "4" }}>
        <AboutArray />
        <AboutOperation />
        <PlayGround />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={anchorLinksData} />
      </div>
    </div>
  );
};

const stackCode = `class Queue {
  constructor() {
      this.items = [];
  }

  enqueue(item) {
      // Add an element to the rear of the queue.
      this.items.push(item);
  }

  dequeue() {
      // Remove and return the element from the front of the queue.
      if (!this.isEmpty()) {
          return this.items.shift();
      } else {
          throw new Error("Cannot dequeue from an empty queue");
      }
  }

  front() {
      // Return the element at the front of the queue without removing it.
      if (!this.isEmpty()) {
          return this.items[0];
      } else {
          throw new Error("Queue is empty");
      }
  }

  size() {
      // Return the number of elements in the queue.
      return this.items.length;
  }

  isEmpty() {
      // Check if the queue is empty.
      return this.items.length === 0;
  }
}

// Example usage:
const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log("Front of the queue:", myQueue.front());
console.log("Queue size:", myQueue.size());

// Dequeue elements
while (!myQueue.isEmpty()) {
  console.log("Dequeued:", myQueue.dequeue());
}

console.log("Is the queue empty?", myQueue.isEmpty());

`;

export const anchorLinksData = [
  { href: "#array", label: "About Array" },
  { href: "#operation", label: "Operation" },
  { href: "#playground", label: "Playground" },
];

export default Array;
