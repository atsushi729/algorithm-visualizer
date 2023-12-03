import React from "react";
import { useState } from "react";
import SyntaxHighlight from "../../components/SyntaxHighlight";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
// import your desired theme

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

    // Map over the data to create table rows
    const rows = timeComplexities.map((item, index) => (
      <tr
        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 border-neutral-500 hover:bg-neutral-300"
        key={`complexity-${index}`}
      >
        <td className="px-6 py-4 font-medium">{item.complexity}</td>
        <td className="px-6 py-4">{item.time}</td>
        <td className="px-6 py-4">{item.description}</td>
      </tr>
    ));

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

  //---------------------------------------------------------------------
  // Main component
  //---------------------------------------------------------------------
  return (
    <>
      <AboutTimeComplexity />
      <TimeComplexityTable />
      <AboutSpaceComplexity />
    </>
  );
};

export default TimeComplexityPage;
