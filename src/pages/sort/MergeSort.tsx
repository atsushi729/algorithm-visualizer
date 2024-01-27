import { Link } from "react-router-dom";
import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import BubbleSortCanvas from "../../visualizer/sort/BubbleSort";

const MergeSort = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutMergeSort = () => {
    return (
      <div id="about-bubble-sort" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Merge sort</h1>
          <p className="text-lg mb-4 text-left">
            Merge sort is a popular and efficient sorting algorithm that follows
            the{" "}
            <Link to="/dashboard/technique">
              <strong className="text-blue-700 link link-underline link-underline-black">
                divide and conquer strategy.
              </strong>{" "}
            </Link>
            It works by dividing the array into halves, sorting each half, and
            then merging the two sorted halves back together. The process is
            recursive, with the base case being arrays of size one, which are
            inherently sorted. Here's a step-by-step breakdown of how merge sort
            works:
          </p>
          <p className="text-base inline">How Merge sort works:</p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Divide: </strong> The array is divided into two halves,
              right down the middle. If the array has an odd number of elements,
              one of the halves will have one more element than the other.
            </li>
            <li>
              <strong>Conquer:</strong> : Each half is recursively sorted using
              merge sort. This process continues until the base case of a single
              element (or no elements) is reached, which is considered sorted by
              definition.
            </li>
            <li>
              <strong>Combine/Merge:</strong> The two sorted halves are then
              merged together into a single sorted array. This is done by
              comparing the elements of each half and copying the smaller
              element into the new array, progressing through both halves until
              all elements are copied into the merged array.
            </li>
          </ul>
          <p className="text-lg mb-4 text-left">
            Merge sort is known for its efficiency and stability. It has a
            worst-case and average complexity of O(n log n), where n is the
            number of elements in the array. Its main disadvantage is that it
            requires additional space proportional to the size of the input
            array for the merging process, making it not an in-place sort.
          </p>
        </div>
      </div>
    );
  };

  const AboutOperation = () => {
    return (
      <div id="time-complexity" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 font-bold">Time Complexity</h1>
          <p className="text-lg mb-4">
            It's important to note that while Bubble Sort is simple and easy to
            understand, its O(n²) time complexity makes it inefficient for large
            datasets compared to more advanced sorting algorithms like
            QuickSort, MergeSort, or HeapSort, which have O(n log n) average and
            worst-case time complexities.
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Operation of Data structure:
          </h5>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <a
                href="/data-structure/stack"
                className="no-underline hover:underline hover:text-blue-500 font-bold"
              >
                Worst-case Time Complexity (O(n²)):
              </a>
              <p>
                This occurs when the array is in reverse order, necessitating
                the maximum number of swaps. In this case, for each of n
                elements, the algorithm performs nearly n comparisons, leading
                to a time complexity of O(n²).
              </p>
            </li>
            <li>
              <a
                href="/data-structure/stack"
                className="no-underline hover:underline hover:text-blue-500 font-bold"
              >
                Best-case Time Complexity (O(n)):
              </a>
              <p>
                This occurs when the array is already sorted. The algorithm only
                needs to make one pass through the array to confirm that no
                swaps are needed. Therefore, the time complexity is O(n).
              </p>
            </li>
            <li>
              <a
                href="/data-structure/stack"
                className="no-underline hover:underline hover:text-blue-500 font-bold"
              >
                Average-case Time Complexity (O(n²))
              </a>
              <p>
                For a randomly ordered array, the average time complexity is
                also O(n²), similar to the worst-case scenario.
              </p>
            </li>
          </ul>
          <p className="mt-5">
            Here is a simple example that adds one to the input value:
          </p>
          <SyntaxHighlight codeString={linkedListCode} language="javascript" />
        </div>
      </div>
    );
  };

  const PlayGround = () => {
    return (
      <div id="playground" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Playground</h1>
          <BubbleSortCanvas />
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
        <AboutMergeSort />
        <AboutOperation />
        <PlayGround />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={anchorLinksData} />
      </div>
    </div>
  );
};

const linkedListCode = `function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
      swapped = false;

      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              // Swap the elements
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              swapped = true;
          }
      }

      // If no two elements were swapped by inner loop, then break
      if (!swapped) {
          break;
      }
  }

  return arr;
}

// Example usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", array);
console.log("Sorted Array:", bubbleSort(array));

`;

export const anchorLinksData = [
  { href: "#about-bubble-sort", label: "About Bubble sort" },
  { href: "#time-complexity", label: "Time complexity" },
  { href: "#playground", label: "Playground" },
];

export default MergeSort;
