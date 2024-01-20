import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import LinkedListCanvas from "../../visualizer/data-structure/LinkedListCanvas";
const BubbleSort = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutBubbleSort = () => {
    return (
      <div id="about-bubble-sort" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">
            Bubble sort
          </h1>
          <p className="text-lg mb-4 text-left">
            Bubble Sort is a simple sorting algorithm that repeatedly steps
            through the list to be sorted,{" "}
            <strong className="text-blue-700">
              compares each pair of adjacent items, and swaps them if they are
              in the wrong order.{" "}
            </strong>
            The pass through the list is repeated until no swaps are needed,
            which means the list is sorted. The algorithm gets its name because
            smaller elements "bubble" to the top of the list. separate node.
          </p>
          <p className="text-base inline">Here's how it works:</p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Data </strong> : This holds the actual value of the
              element (e.g., an integer, string, object).
            </li>
            <li>
              <strong>Next</strong> : This is a pointer that points to the next
              node in the list. If there are no more elements, this points to
              null.
            </li>
          </ul>
          <img
            src="/images/linked-list/linked-list.png"
            alt="About Algorithm"
            className="mb-5 shadow-lg rounded-lg border"
          />
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Real-world examples of linked lists in action:
          </h5>
          <ul className="marker:text-blue-600 list-decimal ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">Music Player Playlists:</p>
              <p>
                Imagine your music player's playlist. Each song is a node in a
                linked list, containing information like title, artist, and
                duration. The nodes are linked together, allowing you to easily
                play songs sequentially, jump to specific songs, or shuffle the
                playlist.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Web Browser History:</p>
              <p>
                When you browse the internet, your browser maintains a history
                of visited pages. This history is often implemented as a linked
                list, where each node represents a visited page with its URL,
                title, and timestamp. You can easily navigate back and forth
                through your history by traversing this list.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">
                File System Organization:
              </p>
              <p>
                The directory structure on your computer is essentially a linked
                list. Each folder is a node with references to its subfolders
                and files. This allows you to easily navigate through your files
                and folders by following these references.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const AboutOperation = () => {
    return (
      <div id="time-complexity" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 font-bold">Time Complexity</h1>
          <p className="text-lg mb-4">
            Linked lists are fundamental data structures in computer science,
            often used due to their efficient insertion and deletion operations
            compared to arrays. A linked list is a collection of nodes, where
            each node contains data and a reference (or link) to the next node
            in the sequence. Here are the primary operations that can be
            performed on linked lists:
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
                Insertion
              </a>
              <ul>
                <li>
                  - At the Head (Front): Add a new node at the beginning of the
                  list.
                </li>
                <li>
                  - At the Tail (End): Add a new node at the end of the list.
                </li>
                <li>
                  - At a Specific Position: Insert a new node at a specified
                  position in the list.
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/data-structure/stack"
                className="no-underline hover:underline hover:text-blue-500 font-bold"
              >
                Deletion
              </a>
              <ul>
                <li>
                  - From the Head (Front): Remove the first node of the list.
                </li>
                <li>
                  - From the Tail (End): Remove the last node of the list.
                </li>
                <li>
                  - A Specific Node: Remove a specific node from the list,
                  usually identified by its value or position.
                </li>
              </ul>
            </li>
          </ul>
          <p>Here is a simple example that adds one to the input value:</p>
          <SyntaxHighlight codeString={linkedListCode} language="javascript" />
        </div>
      </div>
    );
  };

  const PlayGround = () => {
    return (
      <div id="playground" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Playground</h1>
          <LinkedListCanvas />
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
        <AboutBubbleSort />
        <AboutOperation />
        <PlayGround />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={anchorLinksData} />
      </div>
    </div>
  );
};

const linkedListCode = `// Define a class for the list node
class ListNode {
  constructor(data) {
    this.data = data; // Data carried by the node
    this.next = null; // Reference to the next node in the list
  }
}

// Define a class for the linked list
class LinkedList {
  constructor() {
    this.head = null; // The list initially has no head
  }

  // Method to add a new node to the end of the list
  add(data) {
    const newNode = new ListNode(data); // Create a new node with the given data
    if (this.head === null) { // If the list is empty
      this.head = newNode; // Set the new node as the head
    } else {
      let current = this.head; // Start at the head
      while (current.next !== null) { // Traverse to the end of the list
        current = current.next;
      }
      current.next = newNode; // Add the new node at the end
    }
  }

  // Method to find a node with specified data
  find(data) {
    let current = this.head; // Start at the head
    while (current !== null && current.data !== data) { // Traverse the list
      current = current.next;
    }
    return current; // Return the found node or null
  }

  // Method to remove a node with specified data
  remove(data) {
    let current = this.head;
    let previous = null;

    while (current !== null && current.data !== data) {
      previous = current; // Keep track of the previous node
      current = current.next;
    }

    if (current !== null) { // If the node was found
      if (previous === null) { // If it's the head of the list
        this.head = current.next; // Remove it by changing the head
      } else {
        previous.next = current.next; // Remove it by bypassing it in the chain
      }
    }
  }

  // Helper method to output the list as a string
  toString() {
    let result = '';
    let current = this.head;
    while (current !== null) {
      result += current.data;
      current = current.next;
    }
    result += 'null';
    return result;
  }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log(list.toString()); // Outputs: 1 -> 2 -> 3 -> null

const foundNode = list.find(2);
console.log(foundNode); // Outputs the node with data 2

list.remove(2);
console.log(list.toString()); // Outputs: 1 -> 3 -> null

`;

export const anchorLinksData = [
  { href: "#about-bubble-sort", label: "About Bubble sort" },
  { href: "#time-complexity", label: "Time complexity" },
  { href: "#playground", label: "Playground" },
];

export default BubbleSort;
