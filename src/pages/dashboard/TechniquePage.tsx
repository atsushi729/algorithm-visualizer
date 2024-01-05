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
            Divide and conquer is a problem-solving technique that{" "}
            <strong className="text-blue-700">
              breaks down a large problem into smaller and simpler subproblems.
            </strong>{" "}
            These subproblems are then solved individually, and the solutions
            are combined to arrive at a solution for the original problem. The
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
            src="/images/technique/divide-and-conquer.png"
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
            applied to solve problems that{" "}
            <strong className="text-blue-700">
              require searching for all possible solutions and selecting the
              ones that meet certain criteria.
            </strong>{" "}
            It is used extensively in constraint satisfaction problems, such as
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

  return (
    <div className="container mx-auto p-8 flex">
      <div className="flex-grow" style={{ flex: "4" }}>
        <DivideAndConquer />
        <BackTrack />
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
];
