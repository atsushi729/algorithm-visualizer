import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import LinkedListCanvas from "../../visualizer/data-structure/LinkedListCanvas";
const BubbleSort = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutBubbleSort = () => {
    return (
      <div id="about-bubble-sort" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">
            Bubble sort
          </h1>
          <p className="text-lg mb-4 text-left">
            Bubble Sort is a simple sorting algorithm that repeatedly steps
            through the list to be sorted,{" "}
            <strong className="text-blue-700">
              compares each pair of adjacent items, and swaps them if they are
              in the wrong order.{" "}
            </strong>
            The pass through the list is repeated until no swaps are needed,
            which means the list is sorted. The algorithm gets its name because
            smaller elements "bubble" to the top of the list. separate node.
          </p>
          <p className="text-base inline">How Bubble sort works:</p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Starting the Algorithm: </strong> Begin at the start of
              the array.
            </li>
            <li>
              <strong>Comparing Adjacent Elements:</strong> : Compare the first
              two elements of the array. If the first element is greater than
              the second element, swap them.
            </li>
            <li>
              <strong>Continuing Through the Array:</strong> :Move to the next
              pair of adjacent elements and repeat the comparison and swap if
              necessary. Continue this process for each pair of adjacent
              elements in the array. This completes one full pass through the
              array.
            </li>
            <li>
              <strong>Iterating Until Sorted:</strong> Repeat this process, each
              time excluding the last sorted elements (since with each pass, the
              next largest element will settle at its correct position).
            </li>
          </ul>
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
          <LinkedListCanvas />
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
        <AboutBubbleSort />
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

export default BubbleSort;
