import SyntaxHighlight from "../../components/common/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import StackCanvas from "../../components/visualizer/data-structure/StackCanvas";
import { stackAnchorLinks } from "../../constants/common/anchorLink";
import { stackCode } from "../../constants/sample-code/code";

const Stack = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutStack = () => {
    return (
      <div id="stack" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Stack</h1>
          <p className="text-lg mb-4 text-left">
            In computer science, a stack is a linear data structure that follows
            the Last In, First Out (LIFO) principle. It means that the last
            element added to the stack is the first one to be removed. The stack
            is analogous to a stack of plates where you can only take the top
            plate off.
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Real-world examples of stack in action:
          </h5>
          <ul className="marker:text-blue-600 list-decimal ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">Web Browser History:</p>
              <p>
                The backward and forward buttons in web browsers use a stack to
                keep track of visited pages. Each time you visit a new page, it
                is added to the stack. Pressing the back button removes the
                current page (pops) from the stack, and pressing forward adds it
                back.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Memory Management:</p>
              <p>
                Call stacks are used in memory management to keep track of
                function calls and local variables. The stack memory is
                allocated for each function call, and it is deallocated when the
                function returns.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">
                Undo Mechanism in Software:
              </p>
              <p>
                As mentioned earlier, the undo feature in software applications
                often utilizes a stack to keep track of user actions. Each
                action is pushed onto the stack, and the undo operation pops the
                most recently performed action.
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
              <p className="no-underline font-bold">Push</p>
              <p>
                The "push" operation involves adding an element to the top of
                the stack. When an element is pushed onto the stack, it becomes
                the new top element, and the size of the stack increases.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Pop</p>
              <p>
                The "pop" operation involves removing the element from the top
                of the stack. When an element is popped from the stack, the size
                of the stack decreases, and the element that was below the
                popped element becomes the new top element.
              </p>
            </li>
          </ul>
          <img
            src="/images/stack/stack.png"
            alt="About Stack"
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
          <StackCanvas />
        </div>
      </div>
    );
  };

  const VideoPlayer = () => {
    return (
      <div className="flex justify-center">
        <video width="720" height="340" controls>
          <source src="/video/StackVisualization.mp4" type="video/mp4" />
          Your browser does not support video player.
        </video>
      </div>
    );
  };

  //---------------------------------------------------------------------
  // Main component
  //---------------------------------------------------------------------
  return (
    <div className="container mx-auto p-8 flex">
      <div className="flex-grow" style={{ flex: "4" }}>
        <AboutStack />
        <AboutOperation />
        <PlayGround />
        <VideoPlayer />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={stackAnchorLinks} />
      </div>
    </div>
  );
};

export default Stack;
