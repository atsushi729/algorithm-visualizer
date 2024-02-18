import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";

type Props = {};

const TechniquePage = (props: Props) => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const DivideAndConquer = () => {
    return (
      <div id="divide-and-conquer" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold">Divide and Conquer</h1>
          <p className="text-lg mb-4">
            Divide and conquer is a problem-solving technique that breaks down a
            large problem into smaller and simpler subproblems. These
            subproblems are then solved individually, and the solutions are
            combined to arrive at a solution for the original problem. The
            divide-and-conquer approach is often used in computer science to
            design algorithms. It can be applied to a wide variety of problems,
            including sorting, searching, and graph algorithms.
          </p>
          <p className="text-base inline">
            Here are the steps involved in the divide-and-conquer approach:
          </p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Divide </strong> : Divide the problem into smaller
              subproblems.
            </li>
            <li>
              <strong>Conquer</strong> : Solve the subproblems recursively.
            </li>
            <li>
              <strong>Combine </strong>: Combine the solutions to the
              subproblems to solve the original problem.
            </li>
          </ul>
          <img
            src="/images/dashboard/divide-and-conquer.png"
            alt="About Divide-and-Conquer"
            className="mb-5 shadow-lg rounded-lg border"
          />
        </div>
      </div>
    );
  };

  const BackTrack = () => {
    return (
      <div id="backtrack" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold">Backtrack</h1>
          <p className="text-lg mb-4">
            The backtrack approach is a refined algorithmic technique often
            applied to solve problems that require searching for all possible
            solutions and selecting the ones that meet certain criteria. It is
            used extensively in constraint satisfaction problems, such as
            puzzles, crosswords, and combinatorial optimization problems.
          </p>
          <p className="text-base inline">
            Here are the steps involved in the divide-and-conquer approach:
          </p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Choose </strong> : Start by choosing an option or path
              from the current position.
            </li>
            <li>
              <strong>Explore</strong> : Move forward and explore further
              options to extend the solution.
            </li>
            <li>
              <strong>Evaluate </strong>: After each move, evaluate whether the
              current path satisfies the constraints of the problem.
            </li>
            <li>
              <strong>Backtrack </strong>: If the current path violates
              constraints or leads to a dead end, backtrack to the previous step
              and choose a different option or path.
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const Recursion = () => {
    return (
      <div id="recursion" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold">Recursion</h1>
          <p className="text-lg mb-4">
            In computer science, recursion is a method of solving problems where
            a function calls itself as a subroutine. This technique provides a
            way to break down complicated problems into simpler ones and solve
            them incrementally. Recursion involves two main aspects:
          </p>
          <p className="text-base inline">
            Here are the steps involved in the Recursion approach:
          </p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Base Case: </strong> A simple occurrence that can be
              answered directly. It serves as the termination condition for the
              recursion, preventing infinite loops.
            </li>
            <li>
              <strong>Recursive Case: </strong>The part of the recursion that
              breaks down the complex problem into simpler versions of the same
              problem, calling the same function with different arguments.
            </li>
          </ul>
          <p className="text-lg mb-4">
            Recursion is commonly used in various computer science domains, such
            as algorithms, data structures (like tree and graph traversals), and
            problem-solving techniques. It is particularly powerful for tasks
            that can naturally be defined in terms of smaller versions of the
            same task, such as sorting algorithms (like quicksort and
            mergesort), calculating factorials, Fibonacci numbers, and
            traversing file directories.
          </p>
          <SyntaxHighlight codeString={RecursiveCode} language="javascript" />
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8 flex">
      <div className="flex-grow" style={{ flex: "4" }}>
        <DivideAndConquer />
        <BackTrack />
        <Recursion />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={anchorLinksData} />
      </div>
    </div>
  );
};

export default TechniquePage;

export const anchorLinksData = [
  { href: "#divide-and-conquer", label: "Divide and Conquer" },
  { href: "#backtrack", label: "Backtrack" },
  { href: "#recursion", label: "Recursion" },
];

const RecursiveCode = `function factorial(n) {
  // Base case: if n is 0 or 1
  if (n === 0 || n === 1) {
      return 1;
  } else {
      // Recursive case: n! = n * (n-1)!
      return n * factorial(n - 1);
  }
}

// Example usage
console.log(factorial(5)); // Outputs: 120
`;
