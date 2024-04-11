import { Link } from "react-router-dom";
import SyntaxHighlight from "../../components/common/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import { code, pseudocode } from "../../constants/sample-code/code";
import { algorithmAnchorLinks } from "../../constants/common/anchorLink";

const AlgorithmPage = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutAlgorithm = () => {
    return (
      <div id="about-algorithm" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Algorithm</h1>
          <p className="text-lg mb-4 text-left">
            First of all, What is "Algorithm"? Well, an algorithm is a general
            and simple set of step-by-step instructions that a digital computer
            can execute to solve problem. For it to be practical, it must
            accomplish this within a limited number of steps. Thus, An algorithm
            is defined on specified inputs and generates an output.
          </p>
          <p className="text-base inline">
            Algorithm is consist of 3 elements.
          </p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Input value </strong> : An algorithm has input values from
              a specified set.
            </li>
            <li>
              <strong>Process</strong> : Execute some process from input to
              desire output value.
            </li>
            <li>
              <strong>Output value </strong>: From each set of input values, an
              algorithm produces output values from a specified set.
            </li>
          </ul>
          <img
            src="/images/dashboard/about-algorithm.png"
            alt="About Algorithm"
            className="mb-5 shadow-lg rounded-lg border"
          />
          <p>Here is a simple example that adds one to the input value:</p>
          <SyntaxHighlight codeString={code} language="javascript" />
          <p className="text-base inline mt-5">
            Generally, algorithms possess the following characteristics:
          </p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Finiteness </strong> : An algorithm must terminate after a
              finite number of steps. This means that it should proceed through
              a sequence of steps and ultimately produce a result.
            </li>
            <li>
              <strong>Definiteness</strong> : Each step of an algorithm must be
              clear and unambiguous. No matter the situation, executing the same
              steps in the same order should always produce the same outcome.
            </li>
            <li>
              <strong>Input </strong>: An algorithm can take zero or more
              inputs. These inputs provide the data or conditions necessary to
              solve the problem.
            </li>
            <li>
              <strong>Output </strong>: An algorithm produces one or more
              outputs. These outputs are the solutions to the problem or the
              result of the process.
            </li>
            <li>
              <strong>Effectiveness </strong>: Each step of the algorithm must
              be feasible and effective. That is, each step should be
              sufficiently basic and executable with real computational
              resources.
            </li>
          </ul>
          <h5 className="text-lg mb-4 mt-4 font-bold">Sample of Algorithm:</h5>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <Link to="/search/binary-search">
                <strong className="text-blue-700 link link-underline link-underline-black">
                  Search Algorithm
                </strong>
              </Link>
              <p>
                A search algorithm is a step-by-step procedure used to locate
                specific data among a collection of data. It is considered a
                fundamental procedure in the field of computer science. There
                are many types of search algorithms, such as Linear search,
                Binary search.
              </p>
            </li>
            <li>
              <Link to="/sort/bubble-sort">
                <strong className="text-blue-700 link link-underline link-underline-black">
                  Sort Algorithm
                </strong>
              </Link>
              <p>
                A sort algorithm is a method for arranging elements in lists or
                sequences into a particular order. The most frequently desired
                orders are numerical order and lexicographical order, and the
                efficiency of an algorithm is determined by its performance in
                terms of time and space complexity—specifically, how fast it can
                sort and how much memory it requires.
              </p>
            </li>
          </ul>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Why are these algorithms important?
          </h5>
          <ul className="marker:text-blue-600 list-decimal ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">Efficiency and speed:</p>
              <p>
                Binary search is an example of how an appropriate algorithm can
                save time. If you have a list of 1,000,000 numbers, linear
                search could, in the worst case, require 1,000,000 checks, while
                binary search would only require a maximum of 20 checks! wow!
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Resource management:</p>
              <p>
                In computational terms, linear search could take hours and
                significant processing power for large datasets, whereas binary
                search could take seconds, saving energy and freeing up
                computational resources for other tasks.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Scalability:</p>
              <p>
                As datasets grow larger, the shortcomings of linear search
                become more apparent, and the benefits of binary search become
                more valuable. This is true in many areas of computing, such as
                database lookups, file retrieval, and handling large-scale web
                services.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const AboutDataStructure = () => {
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
              <Link to="/data-structure/array">
                <strong className="text-blue-700 link link-underline link-underline-black">
                  Array
                </strong>
              </Link>
              <p>
                An array in data structures is essentially a linear collection
                of similar elements stored at contiguous memory locations and
                accessible via indices. The size of a traditional array is
                predetermined and remains constant throughout its lifetime.
              </p>
            </li>
            <li>
              <Link to="/data-structure/stack">
                <strong className="text-blue-700 link link-underline link-underline-black">
                  Stack
                </strong>
              </Link>
              <p>
                A stack is a linear data structure that follows the Last In,
                First Out (LIFO) principle. The last element added to the stack
                will be the first one to be removed. It's analogous to a stack
                of plates.
              </p>
            </li>
            <li>
              <Link to="/data-structure/queue">
                <strong className="text-blue-700 link link-underline link-underline-black">
                  Queue
                </strong>
              </Link>
              <p>
                A queue is a linear data structure that follows the First In,
                First Out (FIFO) principle. The first element added will be the
                first one to be removed. This is similar to a queue of people
                waiting in line; the first person in line is the first to be
                served.
              </p>
            </li>
            <li>
              <Link to="/data-structure/linked-list">
                <strong className="text-blue-700 link link-underline link-underline-black">
                  Linked list
                </strong>
              </Link>
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
            src="/images/dashboard/about-datastructure.png"
            alt="About Datastructure"
            className="mb-5 mt-5 shadow-lg rounded-lg border"
          />
        </div>
      </div>
    );
  };

  const AboutPseudocode = () => {
    return (
      <div id="about-pseudocode" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 font-bold">Pseudocode</h1>
          <p className="text-lg mb-4">
            Pseudocode is a simplified, half-English, half-code outline of a
            computer program's logic. It is not written in a specific
            programming language but rather in a human-readable format that
            resembles programming languages.
          </p>
          <p>Here is a simple example that adds one to the input value:</p>
          <SyntaxHighlight codeString={pseudocode} language="pseudocode" />
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Benefits of Pseudocode
          </h5>
          <ul className="marker:text-blue-600 list-decimal ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">Algorithm Representation</p>
              <p>
                Pseudocode provides a way to represent an algorithm's logic in a
                format that is easier to understand than actual code. It focuses
                on the algorithm's steps and structure without getting bogged
                down in the syntax and idiosyncrasies of a specific programming
                language.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Language Independence</p>
              <p>
                Pseudocode is not tied to any specific programming language. It
                can be understood by programmers who are familiar with different
                programming languages, making it a universal tool for
                communicating algorithms.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">
                Simplifying Complex Logic
              </p>
              <p>
                It helps in breaking down complex algorithmic logic into
                simpler, more manageable steps. This makes it easier to
                conceptualize and communicate the solution to a problem.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const AboutFlowChart = () => {
    return (
      <div id="about-flow-chart" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 font-bold">
            Flowcharts in Computer Science
          </h1>
          <p className="text-lg mb-4">
            A flowchart is a diagrammatic representation used to illustrate the
            sequence of operations to solve a problem. In computer science,
            flowcharts serve as visual documentation of the steps involved in a
            program or process.
          </p>
          <p>
            Flowcharts utilize standard symbols like ovals for start/end,
            rectangles for instructions, diamonds for decisions, parallelograms
            for input/output, and arrows to show the flow direction.
          </p>
          <img
            src="/images/dashboard/about-flowchart.png"
            alt="About Flowchart"
            className="mb-5 shadow-lg rounded-lg border"
          />
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Benefits of Flowcharts
          </h5>
          <ul className="marker:text-blue-600 list-decimal ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">Clarity</p>
              <p>
                They simplify the understanding of complex processes, allowing
                for a clearer visualization of a sequence of actions.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Communication</p>
              <p>
                Flowcharts act as a bridge between stakeholders to discuss and
                refine processes, enhancing overall communication.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Efficiency</p>
              <p>
                They help in identifying inefficiencies and potential
                improvements within a process, contributing to a more efficient
                design.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Documentation</p>
              <p>
                Serving as a guide for programmers, flowcharts facilitate the
                comprehension of logic before the coding phase and serve as a
                reference for future maintenance.
              </p>
            </li>
          </ul>
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
        <AboutAlgorithm />
        <AboutDataStructure />
        <AboutPseudocode />
        <AboutFlowChart />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={algorithmAnchorLinks} />
      </div>
    </div>
  );
};

export default AlgorithmPage;
