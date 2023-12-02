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
    // Define the data as a JavaScript object
    const timeComplexities = [
      {
        complexity: "O(1)",
        time: "Constant Time",
        description:
          "The execution time of the algorithm is the same, regardless of the size of the input data. An example is accessing a specific element in an array by index.",
      },
      {
        complexity: "O(log n)",
        time: "Logarithmic Time",
        description:
          "The execution time of the algorithm increases logarithmically with the input size. A common example is a binary search in a sorted array.",
      },
      {
        complexity: "O(n)",
        time: "Linear Time",
        description:
          "The execution time increases linearly with the input size. For instance, iterating through all elements in an array.",
      },
      {
        complexity: "O(n log n)",
        time: "Log-linear Time",
        description:
          "More complex than linear time but more efficient than quadratic time, common in efficient sorting algorithms like mergesort and heapsort.",
      },
      {
        complexity: "O(n^2)",
        time: "Quadratic Time",
        description:
          "The execution time is proportional to the square of the input size. An example of this is the bubble sort algorithm, where you might have to iterate through the elements multiple times.",
      },
      {
        complexity: "O(2^n)",
        time: "Exponential Time",
        description:
          "The execution time doubles with each addition to the input data set. Algorithms with exponential time complexity become infeasible to run with larger inputs.",
      },
      {
        complexity: "O(n!)",
        time: "Factorial Time",
        description:
          "The execution time grows factorially with the input size. An example would be the brute-force solution to the traveling salesman problem using permutation.",
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
      <div className="flex flex-col max-w-4xl mx-auto p-8">
        <div className="overflow-x-auto">
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
              </tr>
            </thead>
            <tbody>{rows}</tbody>
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
