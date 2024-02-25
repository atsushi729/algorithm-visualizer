import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import LinkedListCanvas from "../../components/visualizer/data-structure/LinkedListCanvas";
import { linkedListAnchorLinks } from "../../constants/common/anchorLink";
import { linkedListCode } from "../../constants/sample-code/code";

const LinkedList = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutLinkedList = () => {
    return (
      <div id="about-algorithm" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">
            Linked lists
          </h1>
          <p className="text-lg mb-4 text-left">
            A linked list in computer science is a dynamic data structure for
            storing a sequence of elements. Unlike arrays, where elements are
            stored in contiguous memory locations, each element in a linked list
            is stored in a separate node.
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
      <div id="about-data-structure" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 font-bold">Operation</h1>
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
              <p className="no-underline font-bold">Insertion</p>
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
              <p className="no-underline font-bold">Deletion</p>
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
        <AboutLinkedList />
        <AboutOperation />
        <PlayGround />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={linkedListAnchorLinks} />
      </div>
    </div>
  );
};

export default LinkedList;
