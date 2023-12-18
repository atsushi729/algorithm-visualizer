import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";

const LinkedList = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutLinkedList = () => {
    return (
      <div id="about-algorithm" className="flex justify-start">
        <div className="w-full p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">
            Linked lists
          </h1>
          <p className="text-lg mb-4 text-left">
            A linked list in computer science is a dynamic data structure for
            storing a sequence of elements. Unlike arrays, where elements are
            stored in contiguous memory locations, each element in a linked list
            is stored in a{" "}
            <strong className="text-blue-700">separate node.</strong>
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
          <p>Here is a simple example that adds one to the input value:</p>
          <SyntaxHighlight codeString={code} language="javascript" />
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
      <div id="about-data-structure" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 font-bold">Data Structure</h1>
          <p className="text-lg mb-4">
            Data Structure is a particular way of organizing data in a computer
            so that it can be used effectively. Common examples of data
            structures include arrays, linked lists, stacks, queues, trees, and
            graphs. The choice of a data structure often depends on the specific
            needs of the algorithm or application, such as how data is accessed,
            manipulated, and stored. Efficient data structures can significantly
            improve the performance of an algorithm.
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Example of Data Structure:
          </h5>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <a
                href="/data-structure/stack"
                className="no-underline hover:underline hover:text-blue-500 font-bold"
              >
                Array
              </a>
              <p>
                An array in data structures is essentially a linear collection
                of similar elements stored at contiguous memory locations and
                accessible via indices. The size of a traditional array is
                predetermined and remains constant throughout its lifetime.
              </p>
            </li>
            <li>
              <a
                href="/data-structure/stack"
                className="no-underline hover:underline hover:text-blue-500 font-bold"
              >
                Stack
              </a>
              <p>
                A stack is a linear data structure that follows the Last In,
                First Out (LIFO) principle. The last element added to the stack
                will be the first one to be removed. It's analogous to a stack
                of plates.
              </p>
            </li>
            <li>
              <a
                href="/data-structure/queue"
                className="no-underline hover:underline hover:text-blue-500 font-bold"
              >
                Queue
              </a>
              <p>
                A queue is a linear data structure that follows the First In,
                First Out (FIFO) principle. The first element added will be the
                first one to be removed. This is similar to a queue of people
                waiting in line; the first person in line is the first to be
                served.
              </p>
            </li>
            <li>
              <a
                href="/data-structure/lined-list"
                className="no-underline hover:underline hover:text-blue-500 font-bold"
              >
                Linkd list
              </a>
              <p>
                A linked list is a linear data structure where each element
                (commonly called a node) contains a reference (or link) to the
                next node in the sequence. In a singly linked list, each node
                points to the next node. In a doubly linked list, each node has
                two links, one to the next node and one to the previous node.
              </p>
            </li>
          </ul>
          <img
            src="/images/about-datastructure.png"
            alt="About Datastructure"
            className="mb-5 mt-5 shadow-lg rounded-lg border"
          />
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
        <AboutLinkedList />
        <AboutOperation />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={anchorLinksData} />
      </div>
    </div>
  );
};

const code = `// Secondaly, addOne() get input value and execute function(algorithm).
function addOne(value: number) {
  // Finaly, return output value.
  return value + 1;
}

// First of all, set input value to addOne().
const result = addOne(1);
// Output value is 2
`;

const pseudocode = `function find_maximum(L):
    max_num <- L[0]
    for each n in L:
        if n > max_num:
            max_num <- n
    return max_num

`;

export const anchorLinksData = [
  { href: "#about-algorithm", label: "About Linked list" },
  { href: "#about-data-structure", label: "Operation" },
];

export default LinkedList;
