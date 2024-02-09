import { Link } from "react-router-dom";
import SyntaxHighlight from "../../components/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import BubbleSortCanvas from "../../components/visualizer/sort/BubbleSort";

const QuickSort = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutQuickSort = () => {
    return (
      <div id="about-quick-sort" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Quick sort</h1>
          <p className="text-lg mb-4 text-left">
            Quick sort is a highly efficient sorting algorithm used in computer
            science. It works on the principle of{" "}
            <Link to="/dashboard/technique">
              <strong className="text-blue-700 link link-underline link-underline-black">
                divide and conquer,
              </strong>{" "}
            </Link>
            similar to Merge Sort, but with a different strategy for dividing
            the array. The steps involved in Quick sort are as follows:
          </p>
          <ul className="list-decimal ps-5 space-y-2 mb-5 mt-3">
            <li>
              <strong>Choose a Pivot: </strong>The algorithm starts by selecting
              a 'pivot' element from the array. The choice of pivot can vary -
              it could be the first element, the last element, the median, or a
              random element of the array.
            </li>
            <li>
              <strong>Partitioning:</strong> The array is rearranged so that all
              elements smaller than the pivot come before the pivot, while all
              elements greater than the pivot come after it. After partitioning,
              the pivot is in its final position. This is called the partition
              operation.
            </li>
            <li>
              <strong>Recursively apply:</strong> The above steps are applied
              recursively to the sub-array of elements with smaller values and
              separately to the sub-array of elements with greater values.
            </li>
          </ul>
          <p className="text-lg mb-4 text-left">
            Quick sort is widely used in practice due to its efficiency and
            simplicity, especially for large datasets, and is implemented in
            many standard programming libraries.
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
            The time complexity of Quick Sort varies depending on the case being
            considered: worst case, average case, and best case.
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Performance of Quick sort:
          </h5>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">
                Worst-case Time Complexity (O(n²)):
              </p>
              <p>
                The worst-case time complexity of Quick Sort is O(n 2 ). This
                scenario occurs when the pivot element chosen is always the
                smallest or largest element of the list. Such a situation leads
                to very inefficient performance because the list is partitioned
                into two sublists, one of which is always empty, reducing the
                size of the list to be sorted by only one element at each
                recursion. This can happen with certain types of input data,
                such as a list that is already sorted or sorted in reverse
                order.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">
                Average-case Time Complexity (O(nlogn))
              </p>
              <p>
                For the average and best cases, the time complexity of Quick
                Sort is O(nlogn). Quick Sort is highly efficient on average
                because it divides the list into two roughly equal parts at each
                step (assuming a good pivot), and then sorts the sublists
                independently. This division forms a divide-and-conquer
                approach, leading to a depth of n log n in the recursion tree.
                Since each level of recursion involves processing n elements in
                total, the overall time complexity is O(nlogn).
              </p>
            </li>
          </ul>
          <p className="mt-5">
            Here is a simple example that adds one to the input value:
          </p>
          <SyntaxHighlight codeString={quickSortCode} language="javascript" />
        </div>
      </div>
    );
  };

  const PlayGround = () => {
    return (
      <div id="playground" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Playground</h1>

          {/* TODO : create quick sort canvas */}
          {/* <BubbleSortCanvas /> */}
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
        <AboutQuickSort />
        <AboutOperation />
        <PlayGround />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={anchorLinksData} />
      </div>
    </div>
  );
};

const quickSortCode = `function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
      // Partitioning index
      let partitionIndex = partition(arr, left, right);

      // Recursively sort elements before and after partition
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  // Choosing the rightmost element as the pivot
  const pivot = arr[right];
  let partitionIndex = left; // Set partition index as left initially

  for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
          // Swapping if element is smaller than pivot
          [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
          partitionIndex++;
      }
  }

  // Swap the pivot element with the element at the partition index
  [arr[partitionIndex], arr[right]] = [arr[right], arr[partitionIndex]];
  return partitionIndex;
}

// Example usage
const array = [10, 7, 8, 9, 1, 5];
quickSort(array);
console.log(array);

`;

export const anchorLinksData = [
  { href: "#about-quick-sort", label: "About Quick sort" },
  { href: "#time-complexity", label: "Time complexity" },
  { href: "#playground", label: "Playground" },
];

export default QuickSort;
