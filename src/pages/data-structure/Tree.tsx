import SyntaxHighlight from "../../components/common/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import ArrayCanvas from "../../components/visualizer/data-structure/Array";
import { arrayAnchorLinks } from "../../constants/common/anchorLink";
import { arrayCode, treeCode } from "../../constants/sample-code/code";

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
            In computer science, a tree is a widely-used abstract data structure
            that simulates a hierarchical tree structure with a set of linked
            nodes. Here’s a breakdown of the essential concepts and
            characteristics of trees:
          </p>
          <p className="text-base inline">Basic Concepts</p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Node </strong> : Each element of a tree is called a node.
              A node typically contains data and references to other nodes (its
              children).
            </li>
            <li>
              <strong>Root</strong> : The top node in a tree, from which all
              other nodes descend. There is exactly one root per tree.
            </li>
            <li>
              <strong>Parent and Child</strong> : In a tree, any node (except
              the root) has exactly one parent node and zero or more child
              nodes.
            </li>
            <li>
              <strong>Leaves</strong> : Nodes without any children are called
              leaves or leaf nodes.
            </li>
            <li>
              <strong>Edges</strong> : The connections between nodes are called
              edges. In a tree, each connection represents a parent-child
              relationship.
            </li>
            <li>
              <strong>Path</strong> : A sequence of nodes and edges connecting a
              node with a descendant.
            </li>
          </ul>
          <img
            src="/images/tree/tree.png"
            alt="About Algorithm"
            className="mb-5 shadow-lg rounded-lg border"
          />
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Real-world examples of Tree:
          </h5>
          <ul className="marker:text-blue-600 list-decimal ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">Database Indexing:</p>
              <p>
                Many databases use tree structures, like B-Trees and B+ Trees,
                for indexing. This speeds up data retrieval by allowing quick
                access to records through their keys, similar to looking up
                words in a dictionary.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">
                DOM (Document Object Model):
              </p>
              <p>
                Web browsers use a tree structure to represent the hierarchy of
                elements on a webpage, making it possible to traverse and
                manipulate the structure with languages like JavaScript.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Decision Trees:</p>
              <p>
                In machine learning, decision trees are used for classification
                and regression. They model decisions and their possible
                consequences as a tree, where each node represents a feature to
                be tested, and each branch represents the outcome of that test.
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
          <SyntaxHighlight codeString={treeCode} language="javascript" />
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
