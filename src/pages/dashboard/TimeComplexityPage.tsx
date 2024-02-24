import React from "react";
import { useState } from "react";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import { timeComplexities } from "../../constants/sample-code/code";

type Props = {};

const TimeComplexityPage = (props: Props) => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutTimeComplexity = () => {
    return (
      <div className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold">Time complexity</h1>
          <p className="text-lg mb-4">
            Time complexity is a concept in computer science that describes the
            amount of computer time it takes to run an algorithm. Time
            complexity is usually expressed using Big O notation, which helps to
            quantify how the runtime of an algorithm increases with the size of
            the input data set.
          </p>
          <p className="text-base inline">
            Here's a brief explanation of common time complexity terms:
          </p>
        </div>
      </div>
    );
  };

  const TimeComplexityTable = () => {
    // State to keep track of the expanded row
    const [expandedRow, setExpandedRow] = useState(null);

    // Function to handle row click
    const toggleRow = (index: any) => {
      setExpandedRow(expandedRow === index ? null : index);
    };

    return (
      <div className="flex">
        <div className="max-w-4xl m-auto p-8">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium border-neutral-500 bg-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Complexity
                </th>
                <th scope="col" className="px-6 py-4">
                  Time
                </th>
                <th scope="col" className="px-6 py-4">
                  Description
                </th>
                <th scope="col" className="px-6 py-4">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              {timeComplexities.map((item, index) => (
                <React.Fragment key={item.complexity}>
                  <tr className="border-neutral-500 hover:bg-neutral-100">
                    <td className="px-6 py-4 font-medium">{item.complexity}</td>
                    <td className="px-6 py-4">{item.time}</td>
                    <td className="px-6 py-4">{item.description}</td>
                    <td className="px-6 py-4">
                      {expandedRow === index ? (
                        <ArrowDropDownCircleOutlinedIcon
                          onClick={() => toggleRow(index)}
                        />
                      ) : (
                        <ArrowDropDownCircleOutlinedIcon
                          onClick={() => toggleRow(index)}
                        />
                      )}
                    </td>
                  </tr>
                  {expandedRow === index && (
                    <tr className="border-b border-neutral-500">
                      <td colSpan={4} className="px-6 py-4">
                        <SyntaxHighlight
                          codeString={item.code}
                          language="javascript"
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <img
            src="/images/dashboard/time-complexity.png"
            alt="Time-complexity"
            className="mb-5 shadow-lg rounded-lg border"
          />
          <div>
            Reference:Algorithms: Big O Notations
            <br />
            (https://roddelaporte.medium.com/introduction-to-algorithms-big-o-notations-d06b22a113f7)
          </div>
        </div>
      </div>
    );
  };

  const AboutSpaceComplexity = () => {
    return (
      <div className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold">Space complexity</h1>
          <p className="text-lg mb-4">
            Space complexity is a measure used in computer science to describe
            the amount of memory space required by an algorithm to run as a
            function of the length of the input. It's a way to quantify the
            amount of memory an algorithm needs to store data, such as
            variables, allocated objects, and function calls. The space
            complexity is analyzed similarly to time complexity, often using Big
            O notation. This analysis helps in understanding how efficient an
            algorithm is in terms of memory usage, which is particularly
            important in environments with limited memory resources.
          </p>
        </div>
      </div>
    );
  };

  const AboutCase = () => {
    return (
      <div className="flex" id="case">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold">
            Best-case and Worst-case
          </h1>
          <p className="text-lg mb-4">
            In computer science, we often analyze the performance of algorithms
            based on different scenarios. Let’s explore the concepts of best
            case, worst case, and average case:
          </p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Best Case:</strong>
              <ul className="list-disc ps-5 space-y-2 mb-5 mt-3">
                <li>
                  The best case scenario for an algorithm represents the optimal
                  conditions under which it performs.
                </li>
                <li>
                  It corresponds to the minimum resource usage, such as the
                  fewest number of steps or the least amount of time. However,
                  best-case performance is rarely the primary consideration when
                  choosing or developing algorithms.
                </li>
                <li>
                  Example: Consider a linear search algorithm. The best case
                  occurs when the desired element is the first element in the
                  list. In this scenario, the algorithm finds the element
                  immediately.
                </li>
              </ul>
            </li>
            <li>
              <strong>Worst Case:</strong>
              <ul className="list-disc ps-5 space-y-2 mb-5 mt-3">
                <li>
                  The worst case scenario represents the maximum resource usage
                  by an algorithm.
                </li>
                <li>
                  It provides an upper bound on the algorithm’s performance.
                  Usually, we focus on worst-case time complexity.
                </li>
                <li>
                  Example: For the same linear search algorithm, the worst case
                  occurs when the desired element is the last element in the
                  list or not present at all. The algorithm must traverse the
                  entire list to determine this, resulting in the maximum number
                  of steps.
                </li>
              </ul>
            </li>
            <li>
              <strong>Average Case:</strong>
              <ul className="list-disc ps-5 space-y-2 mb-5 mt-3">
                <li>
                  The average case considers the expected resource usage over a
                  range of inputs.
                </li>
                <li>
                  It accounts for the distribution of inputs encountered in
                  practice. Determining the average case can be challenging,
                  especially when dealing with complex data structures or
                  real-world data.
                </li>
                <li>
                  Example: Suppose we analyze the average case of a sorting
                  algorithm. We consider various input distributions (random,
                  partially sorted, etc.) and calculate the average number of
                  steps needed for each.
                </li>
              </ul>
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
        <div id="time-complexity">
          <AboutTimeComplexity />
        </div>
        <TimeComplexityTable />
        <div id="space-complexity">
          <AboutSpaceComplexity />
        </div>
        <AboutCase />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={anchorLinksData} />
      </div>
    </div>
  );
};

export default TimeComplexityPage;

export const anchorLinksData = [
  { href: "#time-complexity", label: "Time Complexity" },
  { href: "#space-complexity", label: "Space Complexity" },
  { href: "#case", label: "Best-case and Worst-case" },
];
