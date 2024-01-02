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
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8 flex">
      <div className="flex-grow" style={{ flex: "4" }}>
        <div id="time-complexity">
          <DivideAndConquer />
        </div>
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
];
