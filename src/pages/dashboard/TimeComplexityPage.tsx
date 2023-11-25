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
    return (
      // <div className="flex flex-col max-w-4xl mx-auto p-8">
      //   <p className="text-base inline m-auto p-8">
      //     Here's a brief explanation of common time complexity terms:
      //   </p>
      <div className="flex flex-col max-w-4xl mx-auto p-8">
        <div className="overflow-x-auto">
          {/* <div className="inline-block min-w-full align-middle"> */}
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500 dark:bg-neutral-500">
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
            <tbody>
              <tr
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                key="complexity-o1"
              >
                <td className="px-6 py-4 font-medium">O(1)</td>
                <td className="px-6 py-4">Constant Time</td>
                <td className="px-6 py-4">
                  The execution time of the algorithm is the same, regardless of
                  the size of the input data. An example is accessing a specific
                  element in an array by index.
                </td>
              </tr>
              <tr
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                key="complexity-o1"
              >
                <td className="px-6 py-4 font-medium">O(log n)</td>
                <td className="px-6 py-4">Logarithmic Time</td>
                <td className="px-6 py-4">
                  The execution time of the algorithm increases logarithmically
                  with the input size. A common example is a binary search in a
                  sorted array.
                </td>
              </tr>
              <tr
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                key="complexity-o1"
              >
                <td className="px-6 py-4 font-medium">O(n)</td>
                <td className="px-6 py-4">Linear Time</td>
                <td className="px-6 py-4">
                  The execution time increases linearly with the input size. For
                  instance, iterating through all elements in an array.
                </td>
              </tr>
              <tr
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                key="complexity-o1"
              >
                <td className="px-6 py-4 font-medium">O(n log n)</td>
                <td className="px-6 py-4">Log-linear Time</td>
                <td className="px-6 py-4">
                  More complex than linear time but more efficient than
                  quadratic time, common in efficient sorting algorithms like
                  mergesort and heapsort.
                </td>
              </tr>
              <tr
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                key="complexity-o1"
              >
                <td className="px-6 py-4 font-medium">O(n^2)</td>
                <td className="px-6 py-4">Quadratic Time</td>
                <td className="px-6 py-4">
                  The execution time is proportional to the square of the input
                  size. An example of this is the bubble sort algorithm, where
                  you might have to iterate through the elements multiple times.
                </td>
              </tr>
              <tr
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                key="complexity-o1"
              >
                <td className="px-6 py-4 font-medium">O(2^n)</td>
                <td className="px-6 py-4">Exponential Time</td>
                <td className="px-6 py-4">
                  The execution time doubles with each addition to the input
                  data set. Algorithms with exponential time complexity become
                  infeasible to run with larger inputs.
                </td>
              </tr>
              <tr
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                key="complexity-o1"
              >
                <td className="px-6 py-4 font-medium">O(n!)</td>
                <td className="px-6 py-4">Factorial Time</td>
                <td className="px-6 py-4">
                  The execution time grows factorially with the input size. An
                  example would be the brute-force solution to the traveling
                  salesman problem using permutation.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      // </div>
      // </div>
    );
  };

  //---------------------------------------------------------------------
  // Main component
  //---------------------------------------------------------------------
  return (
    <>
      <AboutTimeComplexity />
      <TimeComplexityTable />
    </>
  );
};

export default TimeComplexityPage;
