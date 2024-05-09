import SyntaxHighlight from "../../components/common/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import ArrayCanvas from "../../components/visualizer/data-structure/Array";
import { treeAnchorLinks } from "../../constants/common/anchorLink";
import { treeCode } from "../../constants/sample-code/code";

const Tree = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutTree = () => {
    return (
      <div id="tree" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Tree</h1>
          <p className="text-lg mb-4 text-left">
            In computer science, a tree is a widely-used abstract data structure
            that simulates a hierarchical tree structure with a set of linked
            nodes. Here’s a breakdown of the essential concepts and
            characteristics of trees:
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">Basic concept</h5>
          <ul className="marker:text-blue-600 list-decimal ps-5 space-y-2">
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
            className="mt-5 shadow-lg rounded-lg border"
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
            Tree data structures are fundamental in computer science and are
            used to organize information in a hierarchical manner.
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Operation of Data structure:
          </h5>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <div className="no-underline font-bold">Insertion</div>
              <p>
                Adding a node to the tree. The position where the node is added
                depends on the specific type of tree. For example, in a binary
                search tree, nodes are added in a way that maintains the
                property that all nodes to the left of a parent node have
                smaller values, and all nodes to the right have larger values.
              </p>
            </li>
            <li>
              <div className="no-underline font-bold">Deletion</div>
              <p>
                Removing a node from the tree. This can be more complex than
                insertion, as it might require reorganizing part of the tree to
                preserve its properties. For instance, deleting a node with two
                children in a binary search tree often involves finding a
                successor to replace the deleted node.
              </p>
            </li>
            <li>
              <div className="no-underline font-bold">Searching</div>
              <p>
                Checking whether a particular value or node is present in the
                tree. This is typically done by traversing the tree from the
                root, making decisions at each node based on comparison of
                values.
              </p>
            </li>
            <li>
              <div className="no-underline font-bold">Traversal</div>
              <p>
                Visiting all the nodes in the tree in a particular order. Common
                tree traversal methods include:
              </p>
              <ol className="list-decimal ml-10 sublist">
                <li>
                  <div className="font-bold">Pre-order</div>
                  <p>
                    Visit the root node first, then recursively do a pre-order
                    traversal of the left subtree, followed by the right
                    subtree.
                  </p>
                </li>
                <li>
                  <div className="font-bold">In-order</div>
                  <p>
                    Recursively do an in-order traversal of the left subtree,
                    visit the root node, then do an in-order traversal of the
                    right subtree.
                  </p>
                </li>
                <li>
                  <div className="font-bold">Post-order</div>
                  <p>
                    Recursively do a post-order traversal of the left and right
                    subtrees, and then visit the root node.
                  </p>
                </li>
                <li>
                  <div className="font-bold">Level-order (Breadth-first)</div>
                  <p>
                    Visit all nodes at the current depth before moving on to
                    nodes at the next level.
                  </p>
                </li>
              </ol>
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

  const VideoPlayer = () => {
    return (
      <div id="vizualization" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">
            Vizualization
          </h1>
          <video width="820" height="340" controls>
            <source src="/video/TreeVisualization.mp4" type="video/mp4" />
            Your browser does not support video player.
          </video>
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
        <VideoPlayer />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={treeAnchorLinks} />
      </div>
    </div>
  );
};

export default Tree;
