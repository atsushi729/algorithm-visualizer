import SyntaxHighlight from "../../components/common/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import ArrayCanvas from "../../components/visualizer/data-structure/Array";
import { arrayAnchorLinks } from "../../constants/common/anchorLink";
import { arrayCode } from "../../constants/sample-code/code";

const Tree = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutTree = () => {
    return (
      <div id="array" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Tree</h1>
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
            Operations with arrays in computer science refer to the various
            manipulations or actions you can perform on an array, which is a
            fundamental data structure.
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Operation of Data structure:
          </h5>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <div className="no-underline font-bold">Insertion</div>
              <p>
                Adding a new element to the array. This can be at any position
                in the array and often requires shifting the existing elements
                to accommodate the new one.
              </p>
            </li>
            <li>
              <div className="no-underline font-bold">Deletion</div>
              <p>
                Removing an element from the array. Similar to insertion, this
                may involve shifting elements to fill the gap left by the
                deleted element.
              </p>
            </li>
            <li>
              <div className="no-underline font-bold">Searching</div>
              <p>
                Finding the position of an element in the array. This can be
                done using linear search or binary search (if the array is
                sorted).
              </p>
            </li>
          </ul>
          <p>Here is a simple example:</p>
          <SyntaxHighlight codeString={arrayCode} language="javascript" />
        </div>
      </div>
    );
  };

  const PlayGround = () => {
    return (
      <div id="playground" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Playground</h1>
          <ArrayCanvas />
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
        <AboutTree />
        <AboutOperation />
        <PlayGround />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={arrayAnchorLinks} />
      </div>
    </div>
  );
};

export default Tree;
