import React from "react";
import { useState } from "react";
import SyntaxHighlight from "../../components/SyntaxHighlight";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import AnchorLinks from "../../components/common/AnchorLinks";

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
            src="/images/time-complexity.png"
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

// Define the data as a JavaScript object
const timeComplexities = [
  {
    complexity: "O(1)",
    time: "Constant Time",
    description:
      "The execution time of the algorithm is the same, regardless of the size of the input data. An example is accessing a specific element in an array by index.",
    code: `function constantTime(arr, index) {
      return arr[index]; // Constant time access
    }`,
  },
  {
    complexity: "O(log n)",
    time: "Logarithmic Time",
    description:
      "The execution time of the algorithm increases logarithmically with the input size. A common example is a binary search in a sorted array.",
    code: `function binarySearch(arr, target) {
      let left = 0;
      let right = arr.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
          return mid;
        } else if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return -1;
    }`,
  },
  {
    complexity: "O(n)",
    time: "Linear Time",
    description:
      "The execution time increases linearly with the input size. For instance, iterating through all elements in an array.",
    code: `function linearTime(arr) {
      arr.forEach(element => {
        // Perform some operation
      });
    }`,
  },
  {
    complexity: "O(n log n)",
    time: "Log-linear Time",
    description:
      "More complex than linear time but more efficient than quadratic time, common in efficient sorting algorithms like mergesort and heapsort.",
    code: `function mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
      return merge(left, right);
    }
    
    function merge(left, right) {
      const result = [];
      let leftIndex = 0;
      let rightIndex = 0;
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }`,
  },
  {
    complexity: "O(n^2)",
    time: "Quadratic Time",
    description:
      "The execution time is proportional to the square of the input size. An example of this is the bubble sort algorithm, where you might have to iterate through the elements multiple times.",
    code: `function bubbleSort(arr) {
      const n = arr.length;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      return arr;
    }`,
  },
  {
    complexity: "O(2^n)",
    time: "Exponential Time",
    description:
      "The execution time doubles with each addition to the input data set. Algorithms with exponential time complexity become infeasible to run with larger inputs.",
    code: `function fibonacci(n) {
      if (n <= 1) {
        return n;
      }
      return fibonacci(n - 1) + fibonacci(n - 2);
    }`,
  },
  {
    complexity: "O(n!)",
    time: "Factorial Time",
    description:
      "The execution time grows factorially with the input size. An example would be the brute-force solution to the traveling salesman problem using permutation.",
    code: `function permute(arr, l, r) {
      if (l === r) {
        console.log(arr);
      } else {
        for (let i = l; i <= r; i++) {
          [arr[l], arr[i]] = [arr[i], arr[l]];
          permute(arr, l + 1, r);
          [arr[l], arr[i]] = [arr[i], arr[l]]; // backtrack
        }
      }
    }`,
  },
];

export const anchorLinksData = [
  { href: "#time-complexity", label: "Time Complexity" },
  { href: "#space-complexity", label: "Space Complexity" },
  { href: "#case", label: "Best-case and Worst-case" },
];
